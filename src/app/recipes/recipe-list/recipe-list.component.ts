import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { LoggingService } from 'src/app/logging.service';
import { RecipeService } from 'src/app/recipe.service';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers:[LoggingService]
})
export class RecipeListComponent implements OnInit {
  Recipes :Recipe[];
 
  constructor(private loggingService:LoggingService,private recipeService: RecipeService, private router: Router, private route:ActivatedRoute) {
    
   }
  ngOnInit() {
    this.Recipes = this.recipeService.GetRecipeDetails();
  }
  OnNewRecipeClick()
  {
    console.log("new recipe button clicked.");
    this.router.navigate(['new'],{relativeTo: this.route})
    
  }

}
