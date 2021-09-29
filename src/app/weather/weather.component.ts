import { Component, OnInit } from '@angular/core';
import {Weather} from "../models/weather.model";
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  errorMessage:string="";
  cityName: string = "";
  disableForcastButton: boolean = false;
  weatherForcastData: Weather | undefined;
  cityinitail:string="";
  api_key:string = "cf9d4e833a4f993b0214cf67d1350a08";

  constructor(private _weatherService:WeatherService) { }

  ngOnInit(): void {
  }

}
