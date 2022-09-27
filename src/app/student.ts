import { NumberSymbol } from "@angular/common";

export interface Student {

createdAt:string;
name:string;
avatar:string;
id:string;
gender:string;
mobile : number;
email:string;
batch:string;
address:{
city:string;
mandal:string;
district: string;
state: string ;
pin:string;
};
educations:[
    {qualification: string,year: number, percentage: number},
    {qualification:string,year: number, percentage: number},
    
];
company: {
    companyname: string;
    location: string;
    package: Number;
    offerDate:number;
    },
    sourceType: string;
    direct:string;
    referalname:string;
    source:string
    }

