import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { RegisterUser } from '../models/registerUser';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerUser!:RegisterUser;
registerForm!:FormGroup;

createRegisterForm(){
  this.registerForm= this.formBulder.group({
    userName: new FormControl('',Validators.compose([Validators.required,Validators.minLength(6)])),
    password: new FormControl('',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])),
    comfirmPassword: new FormControl('',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)]))
  },
  {
    validators:this.Mustmatch("password","comfirmPassword")
  } 
  );
}


Mustmatch(password:any,comfirmPassword:any){
  return (formGroup:FormGroup)=>{
    const passwordcontrol=formGroup.controls[password];
    const comfirmPasswordcontrol=formGroup.controls[comfirmPassword];
    if(comfirmPasswordcontrol.errors && !comfirmPasswordcontrol.errors['Mustmatch'])
    {
      return;
    }

    if(passwordcontrol.value!==comfirmPasswordcontrol.value){
      comfirmPasswordcontrol.setErrors({Mustmatch:true});
    }else{
      comfirmPasswordcontrol.setErrors(null);
    }

  }
}

get f(){
  return this.registerForm.controls;
}
  constructor(private formBulder:FormBuilder,private authService:AuthService) { }

  ngOnInit() {
    this.createRegisterForm();
  
  }
 
  Register(){
    if(this.registerForm.valid){
    this.registerUser=Object.assign({},this.registerForm.value);

    this.authService.register(this.registerUser);
 
    }
  }

}
