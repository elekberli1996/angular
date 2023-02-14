import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AcountService } from './services/acount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

  constructor(private account:AcountService,private router:Router){

  }

isloggedin(){

  return this.account.isLogged();

}

  logout(){ 
    this.router.navigate(["products"]);
  return this.account.logOut();

 
}

}
