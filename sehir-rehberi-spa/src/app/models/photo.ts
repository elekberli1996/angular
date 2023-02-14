import { Data } from "@angular/router";

export class Photo {
    id!:number;
    cityId!:number;
    dataAdded!:Data;
    description!:string;
    isMain!:boolean;
    url!:string;

}
