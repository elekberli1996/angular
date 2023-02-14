import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { City } from '../models/city';
import { Photo } from '../models/photo';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-ngx-gallery',
  templateUrl: './ngx-gallery.component.html',
  styleUrls: ['./ngx-gallery.component.css']
})
export class NgxGalleryComponent implements OnInit {

  city!:City;
  photos:Photo[]=[];
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];
  constructor(private activateRoter:ActivatedRoute,private cityService:CityService) { }

  ngOnInit() {
    this.activateRoter.params.subscribe(params=>{
      this.getCityById(params["cityId"]);
 
    })
  
  }
  getImages(){
    const imageUrl=[];
    for (let i=0;i<this.city.photos.length;i++){

      imageUrl.push({
       small:this.city.photos[i].url,
       medium:this.city.photos[i].url,
       big:this.city.photos[i].url

      });
      
    }return imageUrl;
  }

  getPhotosByCity(cityId:number){
    this.cityService.getPhotosById(cityId).subscribe(data=>{

      this.photos=data;
      this.setGalery();
    });
  }
  setGalery(){
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = this.getImages();
  }

  getCityById(cityId:number){
    this.cityService.getCityById(cityId).subscribe(data=>{
      this.city=data;
    })
  }


}
