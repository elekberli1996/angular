import { Component, OnInit } from '@angular/core';
import { Value } from './value';
import {HttpClient} from  '@angular/common/http'

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values!:Value[];
  constructor(private http:HttpClient) { }
path="https://localhost:44379/api/values";
  ngOnInit() {
    
    this.http.get<Value[]>(this.path).subscribe(data=>{
       this.values=data
    });
  }

}
