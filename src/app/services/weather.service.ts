import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl: string= "";
  units:string = "metrics";
  url:string = "";
  forecast: any;
  public apiKey:string = "cf9d4e833a4f993b0214cf67d1350a08";
  constructor(private http:HttpClient) {
    this.baseUrl = "http://api.openweathermap.org/data.2.5/";
    this.appKey
  }
}
