import { Location } from "@angular/common"; 
import { TestBed, fakeAsync,ComponentFixture, async, tick} from "@angular/core/testing"; 
import { RouterTestingModule } from "@angular/router/testing"; 
import { Router, Routes } from "@angular/router";  
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component'; 
import { CategorisedProductsComponent } from "./categorised-products/categorised-products.component";
import { AppComponent } from './app.component'; 
import { routes } from './app-routing.module'; 
import { ProductsService } from "./products.service";
import { HttpClientModule } from "@angular/common/http";

describe("Router: App", () => { 
    let location: Location; 
    let router: Router; 
    let fixture: ComponentFixture<AppComponent>; 

 

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
    imports: [RouterTestingModule.withRoutes(routes),HttpClientModule], 
    declarations: [AppComponent, ShopByCategoryComponent,CategorisedProductsComponent],
    providers:[ProductsService]

    }); 
    router = TestBed.get(Router); 
    location = TestBed.get(Location); 

    fixture = TestBed.createComponent(AppComponent); 
    router.initialNavigation(); 

  }); 

 

  it('navigate to "" redirects you to home component',async(() => { 
    fixture.detectChanges()

    fixture.whenStable().then(() => { 
    expect(location.path()).toBe("/"); 

    })})); 


  it('should contain a route to /products component',() => { 
   expect(routes).toContain({path:'', component: ShopByCategoryComponent,children:
    [
     {path:"products/:category", component: CategorisedProductsComponent}
    ]
})
    
  }); 

 

}); 

 