import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,  } from "@angular/router"
import { AcountService } from "../services/acount.service";

@Injectable({
    providedIn: 'root'
  })

export class LoginGuards implements CanActivate
{
    constructor(  private accountService:AcountService,private router:Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let  logged=this.accountService.isLogged();
        if(logged){
            return true;
        }
        this.router.navigate(["login"]);
        return false;
       
    }

}