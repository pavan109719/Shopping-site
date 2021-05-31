import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _prodService: ProductsService, private route:Router) { }

  ngOnInit(): void {
  }

  login(loginForm:NgForm){
    console.log(loginForm.value.username, loginForm.valid);
    this._prodService.login(loginForm.value);
  }

}
