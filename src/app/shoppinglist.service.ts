import { Ingredients } from './Shared/Ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppinglistService
{
    OnIngredientAdded = new Subject<Ingredients[]>();
    subject = new Subject<number>();
    IngredientsList = [new Ingredients('apples',5),
  new Ingredients('Mango',10)];

  GetIngredients()
  {
     return this.IngredientsList;
  }
  AddIngredient(Ingredient: Ingredients)
  {
      this.IngredientsList.push(Ingredient);
      this.OnIngredientAdded.next(this.IngredientsList.slice());
      console.log(this.IngredientsList);
  }
  AddIngredients(Ingredient: Ingredients[])
  {
      this.IngredientsList.push(...Ingredient);
      this.OnIngredientAdded.next(this.IngredientsList.slice());
      console.log(this.IngredientsList);
  }
  getIngredient(index: number) {
      return this.IngredientsList[index];
  }
  updateIngredient(index: number, updatedIngredient : Ingredients){
      this.IngredientsList[index] = updatedIngredient;
      this.OnIngredientAdded.next(this.IngredientsList.slice());
  }
  DeleteIngredient(index:number){
    this.IngredientsList.splice(index,1);
    this.OnIngredientAdded.next(this.IngredientsList.slice());
  }
}
