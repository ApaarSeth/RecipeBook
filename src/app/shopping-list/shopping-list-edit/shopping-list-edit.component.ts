import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { Form, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('f') f: NgForm
  editMode = false;
  i: number;
  editIngrediient: Ingredient;
  constructor(private shoppingService: ShoppingService) { }
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.shoppingService.editIngredient.subscribe((index: number) => {
      this.editMode = true;
      this.i = index
      this.editIngrediient = this.shoppingService.getIngredient(index)
      this.f.setValue({
        name: this.editIngrediient.name,
        amount: this.editIngrediient.amount
      })
    })
    
  }

  // addItem(nameInput:HTMLInputElement,amountInput:HTMLInputElement){
  //   const name:string=nameInput.value;
  //   const amount:number=Number(amountInput.value);
  //   this.shoppingService.addIngredient(new Ingredient(name,amount));
  // }

  onSubmit(f: NgForm) {
    if (this.editMode === true) {
      this.shoppingService.updateIngredient(this.i, f.value.name, f.value.amount)
      this.editMode=false;
      // const newIngredient=new Ingredient(f.value.name,f.value.amount)
      // console.log(newIngredient)
      // this.shoppingService.updateIngredient(this.i, newIngredient)
    }
    else {
      this.shoppingService.addIngredient(new Ingredient(f.value.name, f.value.amount));
    }
    this.f.reset();
  }
  onClear(){
    this.f.reset();
    this.editMode=false;
  }
  onDelete(){
    this.shoppingService.deleteIngredient(this.i);
    this.f.reset()
    this.editMode=false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
