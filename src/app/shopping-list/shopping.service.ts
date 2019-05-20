import { Ingredient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingService {
    ingredientsAdded = new Subject<Ingredient[]>()
    editIngredient=new Subject<number>()
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }
    getIngredient(index:number){
    return this.ingredients[index]
    }
    updateIngredient(index:number,name: string,amount:number){
     this.ingredients[index].name=name;
     this.ingredients[index].amount=amount;
    }
    // updateIngredient(index:number,ingredient: Ingredient){
    //     this.ingredients[index]=ingredient;
    //     this.ingredientsAdded.next(this.ingredients.slice())
    //    }

    deleteIngredient(index:number){
     this.ingredients.splice(index,1)
     this.ingredientsAdded.next(this.ingredients.slice());
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsAdded.next(this.ingredients.slice());
    }
    addIngredients(ingredient: Ingredient[]) {
        console.log(ingredient)
        this.ingredients.push(...ingredient);
        console.log(this.ingredients)
        this.ingredientsAdded.next(this.ingredients.concat(ingredient).slice());
    }


}