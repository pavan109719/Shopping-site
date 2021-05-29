import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.css']
})
export class ShopByCategoryComponent implements OnInit {

  response: any;
  category: any;
  selectedCategory: any;
  productList: any;
  constructor(private _prodService: ProductsService, private router: Router) { }

  expandMenu: boolean = false;
  ngOnInit(): void {
    this._prodService.getCategoryList().subscribe(data => {
      this.response = data;
    });
    this._prodService.getProductByCategories().subscribe(data => {
      this.productList = data;
    })


  }
  shopByCategory() {
    this.expandMenu = !this.expandMenu;
  }

  selectCategory(ele: string) {
    this.router.navigate(['products', ele]);
    this.shopByCategory();
  }

}
