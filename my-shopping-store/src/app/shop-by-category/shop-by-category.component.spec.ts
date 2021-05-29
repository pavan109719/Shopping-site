import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';
import { ShopByCategoryComponent } from './shop-by-category.component';
import { HttpClientModule } from '@angular/common/http';
import { from as observableFrom } from 'rxjs';
import {​​​​​​​​ RouterTestingModule }​​​​​​​​ from'@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

class RouterStub{
  navigate(){

  }
}



describe('ShopByCategoryComponent', () => {
  let component: ShopByCategoryComponent;
  let fixture: ComponentFixture<ShopByCategoryComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ ShopByCategoryComponent ],
      providers:[ProductsService,
      {provide:Router,useClass:RouterStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopByCategoryComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call Product list service',()=>{
    let service = fixture.debugElement.injector.get(ProductsService);
    let spy = spyOn(service,'getProductByCategories').and.returnValue(observableFrom([{1:2}]));
    fixture.detectChanges();

      expect(spy).toHaveBeenCalled();
    })


    it('should fetch category list',()=>{
      let service = fixture.debugElement.injector.get(ProductsService);
      let categoryList = spyOn(service,'getCategoryList').and.returnValue(observableFrom([1,2,3]))
  
      fixture.detectChanges();
  
      expect(categoryList).toHaveBeenCalled();
    
    })
    it('should update category list',()=>{
      let categoryList= undefined;
      let service = fixture.debugElement.injector.get(ProductsService);

      categoryList = spyOn(service,'getCategoryList').and.returnValue(observableFrom([1,2,3]));
  
      expect(categoryList).not.toBe(undefined);
    
    })
    it('should update menu show/hide flag on button click',()=>{
      let expandMenu= false;
  
      let btn = fixture.debugElement.query(By.css("#menu"));
      btn.triggerEventHandler('click',[]);
      expandMenu = component.expandMenu;
  
      expect(expandMenu).toBe(true);
    
    })
    
  it('should display menu on clicking shop by category button ', () => {

    let btn = fixture.debugElement.query(By.css("#menu"));
    btn.triggerEventHandler('click',[]);
    fixture.detectChanges();

    let list = fixture.debugElement.query(By.css("#menu-items"));
    
    expect(list).toBeTruthy();
    
  });
  it('should call navigate method',()=>{

    let route = TestBed.get(Router);
    let spy = spyOn(route,'navigate');

    component.selectCategory('category')
  
    expect(spy).toHaveBeenCalledWith(['products','category']);
  })



  xit('should call selectCategory method on selecting category along with the selection value',()=>{

    let btn = fixture.debugElement.query(By.css("#menu"));
    btn.triggerEventHandler('click',[]);
    fixture.detectChanges();

    let category = fixture.debugElement.queryAll(By.css("#list"))[0];
    let el = category.parent;
    let ele :HTMLElement = el?.nativeNode;
     category.triggerEventHandler('click',ele)
    // fixture.detectChanges();
    // component.selectedCategory = "selection";

    // expect(component.selectCategory).toHaveBeenCalledWith(ele);



  })
  
  
  });
  
  

  