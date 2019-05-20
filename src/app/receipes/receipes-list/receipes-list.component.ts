import { Component, OnInit} from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html'

})
export class ReceipesListComponent implements OnInit {

  subscription:Subscription
  receipes: Receipe[]
  recipeSelected:number
  constructor(private shoppingService:ShoppingService,private receipeService: ReceipeService) { }

  ngOnInit() {
    this.receipes = this.receipeService.getReceipe();
    this.subscription=this.receipeService.receipeChanged.subscribe((receipes:Receipe[])=>{
      console.log(receipes)
      this.receipes=receipes;
    })
  }
  selectedReceipe(i:number) {
    this.recipeSelected=i;
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  

}
