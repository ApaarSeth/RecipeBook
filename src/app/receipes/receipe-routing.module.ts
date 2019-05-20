import { Routes, RouterModule } from '@angular/router';
import { ReceipesComponent } from './receipes.component';
import { SelectReceipeComponent } from '../select-receipe/select-receipe.component';
import { ReceipeEditComponent } from './receipe-edit/receipe-edit.component';
import { AuthGaurd } from '../auth/auth-gaurd.service';
import { ReceipesDetailComponent } from './receipes-detail/receipes-detail.component';
import { ReceipeResolver } from './receipes-detail/receipe-resolver.service';
import { NgModule } from '@angular/core';

const routes: Routes = [
    //{path:"",redirectTo:"/receipes",pathMatch:"full"},
    {path:"",component:ReceipesComponent,children:[
      {path:"",component:SelectReceipeComponent},
      {path:"new",component:ReceipeEditComponent,canActivate:[AuthGaurd]},
      {path:":id",component:ReceipesDetailComponent ,resolve:{receipe:ReceipeResolver}},
      {path:":id/edit",component:ReceipeEditComponent,canActivate:[AuthGaurd]}
    ]},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ReceipeRoutingModule { }