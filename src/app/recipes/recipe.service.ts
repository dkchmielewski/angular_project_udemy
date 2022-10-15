import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipesChange = new Subject<Recipe[]>();

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

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChange.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChange.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChange.next(this.recipes.slice());
      }
}