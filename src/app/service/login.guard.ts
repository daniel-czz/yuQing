import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor( public localstorage: LocalstorageService,
               public router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userInfo: any = this.localstorage.get("userInfo");
      if (!userInfo || !userInfo.username){ //没有权限
        this.router.navigate(['/login']);
        return false;
      }else{ //有权限
        return true;
      }
  }
  
}
