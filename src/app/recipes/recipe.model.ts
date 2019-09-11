import { Ingredients } from '../Shared/Ingredient.model';

export class Recipe{
    public name : string;
    public description : string;
    public imagePath : string;
    public ingredients : Ingredients[];
    constructor(name:string,description: string, imagePath: string,ingredientsList : Ingredients[])
    {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredientsList;
    }
}