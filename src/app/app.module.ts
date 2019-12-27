import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodServiceComponent } from './food-service/food-service.component';
import {HttpClientModule } from '@angular/common/http';
import { FoodService } from './food.service';
@NgModule({
  declarations: [
    AppComponent,
    FoodServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
