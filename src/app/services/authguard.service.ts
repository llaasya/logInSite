import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
 public data:any;

isAdmin!:string;
 
  constructor(private router: Router,private dataService:DataService ) {
    this.data=dataService.getOption();

   }
  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
   
    if(this.data.isLoggedIn === "admin")
    return true;
    else if (this.data.isLoggedIn === "user")
    return true;
    else
    {
      alert('Login for access');
      this.router.navigateByUrl('/');

      return false;
    }
    
   }
}
