import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-categorised-products',
  templateUrl: './categorised-products.component.html',
  styleUrls: ['./categorised-products.component.css']
})
export class CategorisedProductsComponent implements OnInit {

  constructor(private _prodService:ProductsService) { }
  productList:any;
  ngOnInit(): void {
    if(this.productList == undefined){
    this._prodService.category.subscribe(data =>{
      this.productList=data;
    })

  }
}
  
  onSelect(){
    console.log(this.productList);
}
    
  
   

}
