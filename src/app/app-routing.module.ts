import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: 'landingPage', loadChildren:()=>import("./landing/landing.module").then(mod=>mod.LandingModule)},
  {path:'',component:LandingPageComponent},
  {path:'landing',component:LandingPageComponent},
  {path:'',redirectTo:'/landing/landingPage',pathMatch:'full'},
  {path:"auth",loadChildren:()=>import('./auth/auth.module').then(mod=>mod.AuthModule)},
  {path:"career",loadChildren:()=>import("./carrer/carrer.module").then(mod=>mod.CarrerModule)},
  {path:"productModule",loadChildren:()=>import("./products/products.module").then(mod=>mod.ProductsModule)},
  {path:"about",loadChildren:()=>import("./about-us/about-us.module").then(mod=>mod.AboutUsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
