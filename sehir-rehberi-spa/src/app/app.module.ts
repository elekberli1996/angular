import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from  '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueeComponent } from './valuee/valuee.component';

import { CityComponent } from './city/city.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { CityDetailComponent } from './city/city-detail/city-detail.component';





@NgModule({
  declarations: [			
    AppComponent,
      ValueeComponent,
     
      CityComponent,CityDetailComponent
   ],
   
  imports: [
    BrowserModule,NgxGalleryModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
