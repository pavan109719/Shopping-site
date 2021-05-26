import { Component, OnInit } from '@angular/core';
import { CategorisedProductsComponent } from '../categorised-products/categorised-products.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.css']
})
export class ShopByCategoryComponent implements OnInit {

  response:any;
  category:any;
  selectedCategory : any;
  productList:any;
  selectedList : any;
  constructor(private _prodService:ProductsService) { }

  expandMenu:boolean = false;
  ngOnInit(): void {
   this._prodService.getCategoryList();
   this._prodService.getProductByCategories();
   
  }
  shopByCategory(){
    this.response = this._prodService.data;
    this.expandMenu=!this.expandMenu;
  }
  selectCategory(ele:HTMLElement){
    this.selectedCategory = ele.innerText;
    this.productList= this._prodService.products;
    console.log(this.selectedCategory);
    console.log(this.productList[0]);
    let category = Object.entries(this.productList[0]);
    console.log(category);
    category.forEach(el=>{
      if(el[0]==this.selectedCategory){
      console.log(el[1]);}
      this.selectedList = el[1];
      
    });
    this._prodService.category.next(this.selectedList);
    this.expandMenu=!this.expandMenu;
  }

}
