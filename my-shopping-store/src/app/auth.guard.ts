import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _prodService:ProductsService,
    private route:Router){}
  canActivate() :boolean{
    if(this._prodService.isLoggedIn()){
        return true;
    }
    else {
      this.route.navigate(['login'])
      return false
    }
  }
  
}
