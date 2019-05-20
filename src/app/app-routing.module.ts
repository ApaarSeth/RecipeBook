import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGaurd } from './auth/auth-gaurd.service';

const routes: Routes = [
  {path:"receipes",loadChildren:"./receipes/receipes.module#ReceipesModule"},
  {path:"shopping",loadChildren:"./shopping-list/shopping.module#ShoppingModule"},
  {path:"signup",loadChildren:"./auth/auth.module#AuthModule"},
  {path:"signin",loadChildren:"./auth/auth.module#AuthModule"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
