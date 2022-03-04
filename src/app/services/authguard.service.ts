import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
// class UserToken{}
// class Permissions {
//   canActivate(id: string): boolean {
//     if(id=== "permit")
//     return true;
//     else
//     return false;
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
 private isAdmin!:string;
 
  constructor(private router: Router,private dataService:DataService ) {
    this.isAdmin=this.dataService.getOption().isLoggedIn;

   }
  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
    if(this.isAdmin === "admin")
    return true;
    else if (this.isAdmin === "user")
    return true;
    else
    {
      alert('Login for access');
      this.router.navigate(['login']);
      return false;
    }
    
   }
}
