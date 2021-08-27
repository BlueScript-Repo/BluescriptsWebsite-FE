import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrerRoutingModule } from './carrer-routing.module';
import { CarrerpageComponent } from './carrerpage/carrerpage.component';


@NgModule({
  declarations: [
    CarrerpageComponent
  ],
  imports: [
    CommonModule,
    CarrerRoutingModule
  ]
})
export class CarrerModule { }
