import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }
  recipeForm: FormGroup;
  ngOnInit() {
    this.route.params.subscribe(() => {
        this.id = +this.route.params.id;
        this.editMode = this.route.params.id == null ? false : true;
        this.initForm();
    });
    console.log(this.id.toString() + this.editMode);
  }
  initForm() {
    let recipename = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    if (this.editMode) {
      const recipe = this.recipeService.GetRecipe(this.id);
      recipename = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipename),
      imagePath: new FormControl(recipeImagePath),
      description: new FormControl(recipeDescription)
    });
  }
}
