import { Component, OnInit } from '@angular/core';
import { Catagory } from './catagory';
import { HttpClient} from '@angular/common/http';
import { CatagoryiesService } from '../services/catagoryies.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css'],
  providers:[CatagoryiesService]
})
export class CatagoryComponent implements OnInit {

  constructor(private http:HttpClient,private catagoryService:CatagoryiesService) { }

  title="Catagoriler";
  catagories!:Catagory[]
  ngOnInit(): void {
   this.catagoryService.getCatagories()
    .subscribe(data=>{
      this.catagories=data;
    })
  }

}
