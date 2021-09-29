import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public apiKey:string = "cf9d4e833a4f993b0214cf67d1350a08";
  constructor() { }
}
