import { NgModule } from '@angular/core';
import { ReceipesComponent } from './receipes.component';
import { ReceipesListComponent } from './receipes-list/receipes-list.component';
import { ReceipesDetailComponent } from './receipes-detail/receipes-detail.component';
import { ReceipesItemComponent } from './receipes-list/receipes-item/receipes-item.component';
import { ReceipeEditComponent } from './receipe-edit/receipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceipeRoutingModule } from './receipe-routing.module';
import { CommonModule } from '@angular/common';
import { SelectReceipeComponent } from '../select-receipe/select-receipe.component';

@NgModule({
    declarations: [
        ReceipesComponent,
        ReceipesListComponent,
        ReceipesDetailComponent,
        ReceipesItemComponent,
        ReceipeEditComponent,
        SelectReceipeComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ReceipeRoutingModule
    ]
})
export class ReceipesModule {
}