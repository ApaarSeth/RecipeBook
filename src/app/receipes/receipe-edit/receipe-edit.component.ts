import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReceipeService } from '../receipe.service';
import { Receipe } from '../receipe.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styleUrls: ['./receipe-edit.component.css']
})
export class ReceipeEditComponent implements OnInit {
  id: number
  receipeEditForm: FormGroup
  name = ""
  imagePath = ""
  description = ""
  editMode = false
  edit: Receipe
  constructor(private router: Router, private route: ActivatedRoute, private receipeService: ReceipeService) { }

  ngOnInit() {
    let receipeIngredient = new FormArray([]);
    this.route.params
      .subscribe((params: Params) => {
        this.id = params.id
        if (params['id']) {
          this.edit = this.receipeService.getSelectedRecipe(+params['id'])
          this.editMode = true;
          if (this.edit.ingredients) {
            console.log(this.edit.ingredients)
            this.edit.ingredients.forEach((ingredient) => {
              console.log(ingredient)
              receipeIngredient.push(new FormGroup({
                'name': new FormControl(ingredient.name, Validators.required),
                'amount': new FormControl(ingredient.amount, Validators.required)
              }))
              console.log(receipeIngredient)
            })
          }
          this.name = this.edit.name;
          this.imagePath = this.edit.imagePath;
          this.description = this.edit.description;
        }
      })
    this.receipeEditForm = new FormGroup({
      'name': new FormControl(this.name, Validators.required),
      'description': new FormControl(this.description, Validators.required),
      'imagePath': new FormControl(this.imagePath, Validators.required),
      'ingredients': receipeIngredient
    })
  }
  getIngredient() {

  }
  onAddIngredient() {
    (<FormArray>this.receipeEditForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(),
      'amount': new FormControl()
    }))
  }
  onDeleteIngredient(i: number) {
    (<FormArray>this.receipeEditForm.get('ingredients')).removeAt(i)
  }
  //  onUpdateServer(){
  //    this.receipeService.updateReceipe(this.id,this.name,this.description,this.imagePath,this.ingredients)
  //    }
  getControl() {
    return (<FormArray>this.receipeEditForm.get('ingredients')).controls;
  }
  onSubmit() {
    if (this.editMode) {
      this.receipeService.updateReceipe(this.id, this.receipeEditForm.value)
    }
    else {
      console.log(this.receipeEditForm.value)
      this.receipeService.addReceipe(this.receipeEditForm.value)
    }
    this.receipeEditForm.reset()
    this.router.navigate(['receipe'])
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }
}
