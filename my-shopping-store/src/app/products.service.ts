import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
data:any;
products:any;
category = new Subject();
  getCategoryList(){
      this.http.get('http://localhost:3000/posts').subscribe(data=>{
      this.data=data;
    })
    return this.data;
    }

    getProductByCategories(){
      this.http.get('http://localhost:3000/categories').subscribe(data=>{
        this.products=data;
      })
      return this.products;

    }
}
