import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsService } from '../products.service';
import { ShopByCategoryComponent } from './shop-by-category.component';
import { HttpClientModule } from '@angular/common/http';
import { from as observableFrom } from 'rxjs';


describe('ShopByCategoryComponent', () => {
  let component: ShopByCategoryComponent;
  let fixture: ComponentFixture<ShopByCategoryComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ShopByCategoryComponent ],
      providers:[ProductsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch category list',()=>{
    let service = TestBed.inject(ProductsService);
    let response = spyOn(service,'getCategoryList').and.returnValue(observableFrom([[1,2,3]]));
    fixture.detectChanges();
  
      expect(response).toHaveBeenCalled();
    })


    it('should fetch Product list',()=>{
      let service = TestBed.inject(ProductsService);
      let productList = spyOn(service,'getProductByCategories').and.returnValue(observableFrom([1,2,3]))
  
      fixture.detectChanges();
  
      expect(productList).toHaveBeenCalled();
    
    })
    it('should update Product list',()=>{
      let categoryList= undefined;
      
      component.ngOnInit();
      component.shopByCategory();
      categoryList = component.response;
  
      expect(categoryList).not.toBe(undefined);
    
    })
    it('should update menu show/hide flag',()=>{
      let expandMenu= false;
  
      component.shopByCategory();
      expandMenu = component.expandMenu;
  
      expect(expandMenu).toBe(true);
    
    })
  
  
  });
  
  

  