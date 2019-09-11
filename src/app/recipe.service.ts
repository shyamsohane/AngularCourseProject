import { Recipe } from './recipes/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from './Shared/Ingredient.model';
import { ShoppinglistService } from './shoppinglist.service';
@Injectable()
export class RecipeService
{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [new Recipe('A test Recipe1',
        'This is a simply test1',
        'https://assets-jpcust.jwpsrv.com/thumbnails/s3z9fsk6-720.jpg',[new Ingredients("Cheese",5)]),
    new Recipe('A test Recipe2',
    'This is a simply test2',
    'https://assets-jpcust.jwpsrv.com/thumbnails/s3z9fsk6-720.jpg',
    [new Ingredients("Cheese",5)])];

    constructor(private shoppinglistService : ShoppinglistService)
    {

    }
    GetRecipeDetails()
    {
        return this.recipes.slice();
    }
    AddIngredientsToShoppingList(Ingredient: Ingredients[])
    {
        this.shoppinglistService.AddIngredients(Ingredient);
    }
    GetRecipe(id: number){
        return this.recipes[id];
    }
}