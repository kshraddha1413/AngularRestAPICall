import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-service',
  templateUrl: './food-service.component.html',
  styleUrls: ['./food-service.component.css']
})
export class FoodServiceComponent implements OnInit {
  public foods=[];

  constructor(private _foodService : FoodService) { }

  ngOnInit() {
    this._foodService.getFoodList()
    .subscribe(data => this.foods = data);
  }

}
