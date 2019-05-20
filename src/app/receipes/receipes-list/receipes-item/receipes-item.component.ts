import { Component, OnInit, Input } from '@angular/core';
import { Receipe } from '../../receipe.model';

@Component({
  selector: 'app-receipes-item',
  templateUrl: './receipes-item.component.html',
  styleUrls: ['./receipes-item.component.css']
})
export class ReceipesItemComponent implements OnInit {
  @Input() receipe:Receipe
  @Input() index:number
  constructor() { }

  ngOnInit() {

  }

  selected (){
    return this.index;
  }

}
