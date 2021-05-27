import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

category = new Subject();
  getCategoryList(): Observable<any>{
      return this.http.get('http://localhost:3000/posts');
      
    }

    getProductByCategories(): Observable<any>{
      return this.http.get('http://localhost:3000/categories');
      // .subscribe(data=>{
      //   this.products=data;
      // })
      // return this.products;

    }
}
