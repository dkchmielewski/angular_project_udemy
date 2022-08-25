import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

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
}