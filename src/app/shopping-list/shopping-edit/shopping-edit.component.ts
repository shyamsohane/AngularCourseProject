import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredients } from 'src/app/Shared/Ingredient.model';
import { ShoppinglistService } from 'src/app/shoppinglist.service';
import { FormControl, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static : false}) slsForm:NgForm;
  editItemSubscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredients;
  constructor(private shoppinglistService: ShoppinglistService) { }
  ngOnInit() {

    this.editItemSubscription = this.shoppinglistService.subject.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppinglistService.getIngredient(index);
        this.slsForm.setValue({
          name: this.editedItem.name,
          number: this.editedItem.amount
        });
      }
      );
  }
  ngOnDestroy(){
    this.editItemSubscription.unsubscribe();
  }
  OnAddRecipe(form: FormControl) {
    const ingName = form.value.name;
    const ingAmount = form.value.number;
    const newIngredient = new Ingredients(ingName, ingAmount);
    if(this.editMode){
      this.shoppinglistService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.shoppinglistService.AddIngredient(newIngredient);
    }
    this.editMode = false;
  }
  onClear(){
    this.slsForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.slsForm.reset();
    this.editMode = false;
    this.shoppinglistService.DeleteIngredient(this.editItemIndex);
  }
}
