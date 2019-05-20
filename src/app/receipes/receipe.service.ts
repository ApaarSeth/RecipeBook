
import { Receipe } from './receipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ReceipesComponent } from './receipes.component';
import { Subject } from 'rxjs';

export class ReceipeService {
    receipeSelected = new Subject();
    receipeChanged = new Subject<Receipe[]>()
    private receipes: Receipe[] = [
        new Receipe(
            'test receipe',
            'simply a demo',
            'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/nouilles-hokka-de-singapour-668df2e5.jpg',
            [new Ingredient("bread", 3),
            new Ingredient("Cheese", 1)]),

        new Receipe(
            'test2 receipe',
            'simply a demo2',
            'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/nouilles-hokka-de-singapour-668df2e5.jpg',
            [new Ingredient("bread", 3),
            new Ingredient("Cheese", 1)])

    ]
    setReceipe(receipes: Receipe[]) {
        this.receipes=receipes;
        this.receipeChanged.next(this.receipes.slice())
    }
    getReceipe() {
        return this.receipes.slice();//To make new copy of receipe and use the reference of the original
    }

    getSelectedRecipe(id: number): Receipe {
        return this.receipes[id]
    }

    addReceipe(receipe: Receipe) {
        this.receipes.push(receipe)
        this.receipeChanged.next(this.receipes.slice())

    }
    updateReceipe(id: number, receipe: Receipe) {
        this.receipes[id] = receipe
        this.receipeChanged.next(this.receipes.slice())
    }
    removeReceipe(id: number) {
        this.receipes.splice(id, 1)
        this.receipeChanged.next(this.receipes.slice())
    }

}


