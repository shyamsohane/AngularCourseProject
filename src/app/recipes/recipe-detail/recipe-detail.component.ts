import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/recipe.service';
import { ShoppinglistService } from 'src/app/shoppinglist.service';
import { Ingredients } from 'src/app/Shared/Ingredient.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe:Recipe = new Recipe('','','',[]);
  constructor(private recipeService: RecipeService,private shoppinglistService: ShoppinglistService,private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    console.log(this.route.snapshot.params['id']);
    this.route.params.subscribe(()=>{
      this.selectedRecipe = this.recipeService.GetRecipeDetails()[this.route.snapshot.params['id']];
    })
    
  }

  AddToShoppingList(ingredients : Ingredients[])
  {
    console.log("This is Ingre added" +ingredients);
    this.shoppinglistService.AddIngredients(ingredients);
  }
}
