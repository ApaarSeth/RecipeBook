import { Ingredient } from "src/app/shared/ingredients.model";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ReceipeService } from '../receipe.service';
import { Injectable } from '@angular/core';


interface Receipe {
    name: string;
    description: string;
    imagePath: string;
    ingredients: Ingredient[]
}

@Injectable()
export class ReceipeResolver implements Resolve<Receipe>{
    constructor(private receipeService: ReceipeService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Receipe> | Promise<Receipe> | Receipe {
        return this.receipeService.getSelectedRecipe(+route.params['id'])
    }

}
