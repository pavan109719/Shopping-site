import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.css']
})
export class ShopByCategoryComponent implements OnInit {

  response: any;
  category = new Subject();
  selectedCategory: any;
  productList: any;
  isLoggedIn: any = false;
  constructor(private _prodService: ProductsService, private route: Router) { }

  expandMenu: boolean = false;
  ngOnInit(): void {
    this._prodService.getCategoryList().subscribe(data => {
      this.response = data;
    });
    this._prodService.getProductByCategories().subscribe(data => {
      this.productList = data;
    })

    this._prodService.isSessionActive.subscribe(d=>this.isLoggedIn=d)
    console.log(this.isLoggedIn);
  }
  shopByCategory() {
    this.expandMenu = !this.expandMenu;
  }

  selectCategory(ele: string) {
    let param = ele;
      if(this.isLoggedIn){
      this.route.navigate(['products', ele]);
      }else{
        this._prodService.selectedCategory(ele);
        this.category.next(param);
      }
  this.shopByCategory();
  }
  logout(){
    this._prodService.logout();
  }

}
