import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategorisedProductsComponent } from './categorised-products/categorised-products.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './login/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopByCategoryComponent,
    CategorisedProductsComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
