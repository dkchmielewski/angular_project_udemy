import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Shrimp Broccoli', 'Delicious shrimp with healthy broccoli', 
        'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg', 
        [
          new Ingredient('Shrimp', 5),
          new Ingredient('Broccoli', 1)
        ]), 
        new Recipe('Shrimp Cajun', 'Delicious shrimp with healthy broccoli', 
        'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg', 
        [
          new Ingredient('Shrimp', 7),
          new Ingredient('Cajun', 3)
        ]),
        new Recipe('Shrimp Paella', 'Delicious shrimp with healthy broccoli', 
        'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg', 
        [
          new Ingredient('Shripm', 8),
          new Ingredient('Mussels', 5)
        ])
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}