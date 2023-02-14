import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxGalleryComponent } from './ngx-gallery/ngx-gallery.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { ValueComponent } from './value/value.component';
import {HttpClientModule} from  '@angular/common/http';
import { RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityaddComponent } from './cityadd/cityadd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { NgxEditorModule } from 'ngx-editor';
import { PhotoComponent } from './photo/photo.component';
import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
  declarations: [							
    AppComponent,
      NgxGalleryComponent,
      NavComponent,
      CityComponent,
      ValueComponent,
      CityDetailComponent,
      CityaddComponent,
      RegisterComponent,PhotoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgxGalleryModule,BrowserAnimationsModule,HttpClientModule,RouterModule.forRoot(appRoutes)
    ,ReactiveFormsModule,FormsModule,NgxEditorModule,FileUploadModule
  ],
  providers: [AlertifyService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
