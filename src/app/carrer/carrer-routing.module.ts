import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarrerpageComponent} from "./carrerpage/carrerpage.component"

const routes: Routes = [
  {path: 'careerpage',component:CarrerpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrerRoutingModule { }
