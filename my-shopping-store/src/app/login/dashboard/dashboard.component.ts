import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _prodService:ProductsService) { }
  
  response:any;

  ngOnInit(): void {
    this._prodService.getCategoryList().subscribe(data => {
      this.response = data;
    });
  }
  

}
