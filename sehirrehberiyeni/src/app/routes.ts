import { Routes } from "@angular/router";

import { CityDetailComponent } from "./city-detail/city-detail.component";


import { CityComponent } from "./city/city.component";
import { CityaddComponent } from "./cityadd/cityadd.component";
import { RegisterComponent } from "./register/register.component";
import { ValueComponent } from "./value/value.component";




export const appRoutes:Routes =[

   { path:"city",component:CityComponent},
    { path:"value",component:ValueComponent},
    {path:"cityadd",component:CityaddComponent},
    { path:"cityDetail/:cityId",component:CityDetailComponent},
    { path:"register",component:RegisterComponent},
   { path:"**",redirectTo:"city",pathMatch:"full"}
]