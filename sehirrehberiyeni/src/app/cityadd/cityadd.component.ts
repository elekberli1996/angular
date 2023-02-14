import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { FormGroup,Validators,FormBuilder} from '@angular/forms'
import { City } from '../models/city';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cityadd',
  templateUrl: './cityadd.component.html',
  styleUrls: ['./cityadd.component.css'],
  providers:[CityService]
})
export class CityaddComponent implements OnInit {

  constructor(private cityService:CityService,private formBuilder:FormBuilder,private router:Router) { }

  city!:City;
  cityAddForm!:FormGroup;
  
  createCityForm(){
    this.cityAddForm=this.formBuilder.group({
      name:["",Validators.required],
      description:["",Validators.required]
    })
  }
  ngOnInit() {
    this.createCityForm();
  }


  Add(){
    if(this.cityAddForm.valid){
    this.city=Object.assign({},this.cityAddForm.value);
    this.city.userId=1;
    this.cityService.add(this.city);
 
    }
  }
 
}
