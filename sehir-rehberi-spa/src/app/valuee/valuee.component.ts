import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Value } from '../value/value';
import { Valuee } from './valuee';

@Component({
  selector: 'app-valuee',
  templateUrl: './valuee.component.html',
  styleUrls: ['./valuee.component.css']
})
export class ValueeComponent implements OnInit {

  values:Valuee[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getValues().subscribe(data=>{
    this.values=data;
    })
  
  }
  getValues(){
   return this.http.get<Valuee[]>("https://localhost:44381/api/values");
  }
}
