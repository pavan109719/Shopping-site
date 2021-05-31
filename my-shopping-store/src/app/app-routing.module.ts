import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CategorisedProductsComponent } from './categorised-products/categorised-products.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';

export const routes: Routes = [
  {path:'', component: ShopByCategoryComponent,children:
  [{path:'products/:category', component: CategorisedProductsComponent,canActivate:[AuthGuard]},
  {path:'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent}
  ]},
  {path:'', redirectTo: '',pathMatch:'full'}
    

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
