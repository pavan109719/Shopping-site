import { Location } from "@angular/common"; 
import { TestBed, fakeAsync, tick } from "@angular/core/testing"; 
import { RouterTestingModule } from "@angular/router/testing"; 
import { Router, Routes } from "@angular/router";  
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component'; 
import { CategorisedProductsComponent } from "./categorised-products/categorised-products.component";
import { AppComponent } from './app.component'; 
import { routes } from './app-routing.module'; 
import { ProductsService } from "./products.service";

describe("Router: App", () => { 
    let location: Location; 
    let router: Router; 
    let fixture; 

 

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
    imports: [RouterTestingModule.withRoutes(routes)], 
    declarations: [AppComponent, ShopByCategoryComponent,CategorisedProductsComponent],
    providers:[ProductsService]

    }); 

 

    router = TestBed.get(Router); 
    location = TestBed.get(Location); 

 

    fixture = TestBed.createComponent(AppComponent); 
    router.initialNavigation(); 

  }); 

 

  it('navigate to "" redirects you to home component', fakeAsync(() => { 
    router.navigate([""]).then(() => { 
    expect(location.path()).toBe("/"); 

    }); 

  })); 

 

}); 

 