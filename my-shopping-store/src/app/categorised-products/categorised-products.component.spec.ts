import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable,empty, Subject,from } from 'rxjs';
import { routes } from '../app-routing.module';
import { ProductsService } from '../products.service';

import { CategorisedProductsComponent } from './categorised-products.component';

class routerStub{
  navigate(){

  }
}
class ActivatedRouteStub{
  private subject = new Subject();

  push(value:any){
    this.subject.next(value);
  }
  get params(){
    return this.subject.asObservable();
  };
}

describe('CategorisedProductsComponent', () => {
  let component: CategorisedProductsComponent;
  let fixture: ComponentFixture<CategorisedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorisedProductsComponent ],
      imports:[HttpClientModule],
      providers:[RouterTestingModule,
        ProductsService,
      {provide:Router, useClass:routerStub},
      {provide:ActivatedRoute,useClass:ActivatedRouteStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorisedProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should fetch the category from roting parameter', () => {
    fixture.detectChanges();
    let route :ActivatedRouteStub = TestBed.get(ActivatedRoute);

    route.push('Footwear')

    expect(component.selection).toBe('Footwear');
});

it('should fetch Product list',()=>{
  let service = fixture.debugElement.injector.get(ProductsService);
  let spy = spyOn(service,'getProductByCategories').and.returnValue(from([{1:2}]));
  component.getProductList();

    expect(spy).toHaveBeenCalled();
  })

}
)
