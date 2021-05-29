import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-categorised-products',
  templateUrl: './categorised-products.component.html',
  styleUrls: ['./categorised-products.component.css']
})
export class CategorisedProductsComponent implements OnInit {

  constructor(private _prodService: ProductsService, private route: ActivatedRoute) {
  }
  productList: any;
  selection: any;
  selectList: any;

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.selection = data;
      this.getProductList();

    });

  }

  getProductList(){
    this._prodService.getProductByCategories().subscribe(data => {
      this.productList = data[0];
      let val = this.selection.category;
      let i = (Object.keys(this.productList)).indexOf(val);
      let list = (Object.entries(this.productList));
      let itemList: any = [];
      list[i].map(e => itemList.push(e));
      this.selectList = itemList[1];

    })

  }
}
