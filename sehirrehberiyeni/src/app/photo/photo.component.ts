import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { Photo } from '../models/photo';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private alertifyService:AlertifyService,private authService:AuthService,
    private activateRouter:ActivatedRoute) 
    { 
      
    }

    photos:Photo[]=[];
    uploader!:FileUploader;
    baseUrl='https://localhost:44381/api/';
    hasBaseDropZoneOver!:boolean;
    hasAnotherDropZoneOver!:boolean;
    response!:string;
    currentMain!:Photo;
    currentCity!:any;

  ngOnInit() {
    this.activateRouter.params.subscribe(params=>{
      this.currentCity=params["cityId"];
    })
    this.initializeUploader();
  }
  initializeUploader(){
    this.uploader= new FileUploader({
      url:this.baseUrl+'cities/'+this.currentCity+'/photos',
      authToken: 'Bearer'+ localStorage.getItem("token"),
      isHTML5:true,
      allowedFileType:['image'],
        autoUpload:false,
        removeAfterUpload:true,
        maxFileSize:10*1024*1024
    })

    this.uploader.onSuccessItem=(item,response,status,headers)=>{
      if(response){
          const res: Photo=JSON.parse(response);
          const photo ={
            id:res.id,
            url:res.url,
            dataAdded:res.dataAdded,
            description:res.description,
            isMain:res.isMain,
              cityId:res.cityId 
          }

          this.photos.push(photo);
      }
      this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;
 
    this.response = '';
    this.uploader.response.subscribe( res => this.response = res );

    }

  
  }
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

}
