import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IFoodItem } from './food';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private _url: string = "/assets/data/foods.json";

  constructor(private http:HttpClient) { }

  getFoodList(): Observable<IFoodItem[]>{
    console.log('aa')
    console.log(this.http.get<IFoodItem[]>(this._url))
    return this.http.get<IFoodItem[]>(this._url);
  }

  getFoodList(): Observable<IFoodItem[]>{
    console.log('aa')
    console.log(this.http.get<IFoodItem[]>(this._url))
    return this.http.post<IFoodItem[]>(this._url,);
  }
}
