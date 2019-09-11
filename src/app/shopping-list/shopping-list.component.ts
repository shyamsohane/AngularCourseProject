import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredients } from '../Shared/Ingredient.model';
import { ShoppinglistService } from '../shoppinglist.service';
import { Subscription, Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  isChanged: Subscription;

  
  ngOnDestroy(): void {
    this.isChanged.unsubscribe();
    
  }

  constructor(private shoppinglistService: ShoppinglistService) { }
  IngredientList: Ingredients[];
  ngOnInit() {
    this.isChanged = this.shoppinglistService.OnIngredientAdded.subscribe(
      (ingredients: Ingredients[]) => {
        this.IngredientList = ingredients;
        console.log("new event came");
      }
    );
    this.IngredientList = this.shoppinglistService.GetIngredients();
    //console.log(this.IngredientList);
   
  }
  onEditItem(index: number) {
    console.log("Hello");
    this.shoppinglistService.subject.next(index);
  }
  
}
