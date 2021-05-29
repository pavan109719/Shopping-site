import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorisedProductsComponent } from './categorised-products/categorised-products.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';

export const routes: Routes = [
  {path:'', component: ShopByCategoryComponent,children:
  [
    {path:"products/:category", component: CategorisedProductsComponent}]},
    {path:'', redirectTo: '',pathMatch:'full'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
