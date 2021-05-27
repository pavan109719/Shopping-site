import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';
import { ShopByCategoryComponent } from './shop-by-category.component';
import { HttpClientModule } from '@angular/common/http';
import { from as observableFrom } from 'rxjs';
import {​​​​​​​​ RouterTestingModule }​​​​​​​​ from'@angular/router/testing';
import { By } from '@angular/platform-browser';




describe('ShopByCategoryComponent', () => {
  let component: ShopByCategoryComponent;
  let fixture: ComponentFixture<ShopByCategoryComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
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

  it('should fetch Product list',()=>{
    let service = fixture.debugElement.injector.get(ProductsService);
    let spy = spyOn(service,'getProductByCategories').and.returnValue(observableFrom([{1:2}]));
    fixture.detectChanges();

    component.ngOnInit();
    
      expect(spy).toHaveBeenCalled();
    })


    it('should fetch category list',()=>{
      let service = fixture.debugElement.injector.get(ProductsService);
      let categoryList = spyOn(service,'getCategoryList').and.returnValue(observableFrom([1,2,3]))
  
      fixture.detectChanges();
       component.ngOnInit()
  
      expect(categoryList).toHaveBeenCalled();
    
    })
    it('should update category list',()=>{
      let categoryList= undefined;
      let service = fixture.debugElement.injector.get(ProductsService);

      categoryList = spyOn(service,'getCategoryList').and.returnValue(observableFrom([1,2,3]))
      component.ngOnInit();
  
      expect(categoryList).not.toBe(undefined);
    
    })
    it('should update menu show/hide flag',()=>{
      let expandMenu= false;
  
      component.shopByCategory();
      expandMenu = component.expandMenu;
  
      expect(expandMenu).toBe(true);
    
    })
    
  it('navigates to products/category route when category is selected from the menu', () => {
    const location: Location = TestBed.inject(Location);
    let ele : HTMLElement = fixture.debugElement.query(By.css("#list")).nativeElement;

    component.selectCategory(ele);
    let param = component.selectedCategory;
    let newPath =`/product/${param}`;
    expect(location.path()).toBe(newPath);
  });
  
  
  });
  
  

  