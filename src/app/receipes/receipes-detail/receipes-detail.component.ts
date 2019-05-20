import { Component, OnInit, Input } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { ActivatedRoute, Params, Data } from '@angular/router';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipes-detail',
  templateUrl: './receipes-detail.component.html',
  styleUrls: ['./receipes-detail.component.css']
})
export class ReceipesDetailComponent implements OnInit {
   
  receipeDetail:Receipe
  constructor(private shoppingService:ShoppingService,private route:ActivatedRoute,private receipeService:ReceipeService ) { }

  ngOnInit() {
    this.route.data.subscribe((data:Data)=>{
      console.log(data)
      this.receipeDetail=data['receipe']
    })
  // this.route.params.subscribe((params:Params)=>{
  //  console.log(params['id'])
  //   this.receipeDetail=this.receipeService.getSelectedRecipe(+params['id']) 
  // })
  }

  addIngredients(){
   this.shoppingService.addIngredients(this.receipeDetail.ingredients)
    }

    onDelete(){
      this.route.params.subscribe((params:Params)=>{
          this.receipeService.removeReceipe(+params['id']) 
         })
    }
}

