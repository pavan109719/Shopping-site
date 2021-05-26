import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategorisedProductsComponent } from './categorised-products/categorised-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopByCategoryComponent,
    CategorisedProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
