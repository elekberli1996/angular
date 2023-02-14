import { Injectable } from '@angular/core';
import { User } from '../login/login';

@Injectable({
  providedIn: 'root'
})
export class AcountService {

  constructor() { }

  loggedIn=false;
  Login(user:User):boolean{
    if(user.userName=="emin"&& user.password=="12345"){
      
      this.loggedIn=true;
      localStorage.setItem("isLogged",user.userName);
      
      return true;
    }
    return false;
  }

  isLogged()
  {
    return this.loggedIn;
  }

  logOut(){
    this.loggedIn=false;
    localStorage.removeItem("isLogged");
  }


}
