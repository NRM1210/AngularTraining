import { Component, OnInit } from '@angular/core';
import{City} from '../models/city.model'
import {CityService} from '../shared/services/city.model';

@Component({
  selector: 'app-cities-overview',
  templateUrl: './cities-overview.component.html',
  styleUrls: ['./cities-overview.component.css']
})

export class CitiesOverviewComponent implements OnInit {
  title:string;
  cities:Array<City>;
  showCities:boolean;
  toggleMsg:string;
  newCity:string = "";
  currentCity:City;
  cityPhoto:string="";


  ngOnInit(){
    this.toggleMsg = 'Toon de lijst met steden';
    this.title = 'Mijn favoriete steden';
    this.cities =   [
    new City(1,'Groningen', 'GR'),
    new City(2,'Hengelo', 'OV'),
    new City(3,'Den Haag', 'ZH'),
    new City(4,'Enschede', 'OV'),
      // {id:1, name:'Groningen', province:'GR'},
      // {id:2, name:'Hengelo', province:'OV'},
      // {id:3, name:'Den Haag', province:'ZH'},
      // {id:4, name:'Enschede', province:'OV'}];
    ]
    this.showCities = this.cities.length > 3;
  }

  changeCity(value:string){
    this.newCity = value;
  }

  btnClick(){
    alert('Uw bestelling wordt uitgevoerd');
  }
  
  toggleCities(){
    this.showCities = !this.showCities;
    this.showCities ? this.toggleMsg = 'Verberg lijst met steden.' : this.toggleMsg = 'Toon de lijst met steden';
  }
  
  showCity(city:City){
    this.currentCity = city;
    this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
  }

  addCity(value:string){
    let addedCity: City = {
      id : this.cities.length + 1, 
      name : value,
      province: "Onbekend"};
      this.cities.push(addedCity);
  }

textVisible:boolean = false;
toggleText(){
  this.textVisible = !this.textVisible;
}

}

