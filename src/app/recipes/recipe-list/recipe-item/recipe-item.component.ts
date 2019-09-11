import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipe: Recipe
  @Input() recipeNumber : number
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = this.recipeService.GetRecipeDetails()[this.recipeNumber];
  }

  OnSelected(){
    this.recipe = this.recipeService.GetRecipeDetails()[this.recipeNumber];
    this.recipeService.recipeSelected.emit(this.recipe);
    console.log(this.recipe.name);
  }

}
