import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {
 
  ingredients: Ingredient[];
  subscription:Subscription;

 constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.ingredients=this.shoppingService.getIngredients();
    this.subscription=this.shoppingService.ingredientsAdded.subscribe((ingredients:Ingredient[])=>{
      this.ingredients=ingredients;
    })
  }
   ngOnDestoy(){
      this.subscription.unsubscribe;
   }

   onSelect(i:number){
     this.shoppingService.editIngredient.next(i);
   }

}
