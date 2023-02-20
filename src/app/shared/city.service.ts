import { Injectable } from '@angular/core';
import { City } from "../models/city.model";

@Injectable({
  providedIn: 'root'
})
export class CityService {
private cities: City[] = [
  new City(1,'Groningen', 'GR'),
  new City(2,'Hengelo', 'OV'),
  new City(3,'Den Haag', 'ZH'),
  new City(4,'Enschede', 'OV'),
]

  constructor() { }

  //retourneer alle cities
  getCities():City[]{
    return this.cities;
  }

  getCity(id:number): City{
    return this.cities.find(c => c.id === id);
  }
}
