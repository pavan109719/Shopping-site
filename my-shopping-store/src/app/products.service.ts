import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient, private route:Router) { }
  isSessionActive =new Subject();
  selection :string = '';
  getCategoryList(): Observable<any>{
      return this.http.get('http://localhost:3000/posts');
      
    }

    getProductByCategories(): Observable<any>{
      return this.http.get('http://localhost:3000/categories');
       }

    login(user:any){
      sessionStorage.setItem('session','admin');
      // let query:any;
      // this.category.category.subscribe(d=>query=d)
      this.selection.length>1?this.route.navigate(['products', this.selection]):this.route.navigate(['dashboard']);
    }
    logout(){
      // sessionStorage.clear();
      sessionStorage.removeItem('session');
      this.isSessionActive.next(false); 
      this.route.navigate(['login']);
      this.selection='';
    }
    selectedCategory(category: string){
      this.selection = category;
      this.route.navigate(['products', this.selection]);
    }
    isLoggedIn(){
       if(sessionStorage.getItem('session')){ 
        this.isSessionActive.next(true); 
        return true}else{ 
          this.isSessionActive.next(false); 
          return false};
    }
}
