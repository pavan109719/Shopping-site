import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router, RouterModule } from '@angular/router';
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
  constructor(private _prodService:ProductsService,
    private router:Router, private route:ActivatedRoute) { }

  expandMenu:boolean = false;
  ngOnInit(): void {
   this._prodService.getCategoryList().subscribe(data =>{
    this.response = data;
  });
    this._prodService.getProductByCategories().subscribe(data =>{
      this.productList = data;
    })
 
   
  }
  shopByCategory(){
    this.expandMenu=!this.expandMenu;
  }
  selectCategory(ele:HTMLElement){
    this.selectedCategory = ele.innerText;
    
    console.log(this.selectedCategory);
    let category = Object.entries(this.productList[0]);

    category.forEach(el=>{
      if(el[0]==this.selectedCategory){
      this.selectedList = el[1];
      }
      
    });
    // this._prodService.category.next(this.productList);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
     this.router.navigate(['/products',this.selectedCategory]);
    this.expandMenu=!this.expandMenu;
  }

}
