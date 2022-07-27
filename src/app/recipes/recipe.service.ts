import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Shrimp Broccoli', 'Delicious shrimp with healthy broccoli', 
        'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg'),
        new Recipe('Shrimp Cajun', 'Delicious shrimp with healthy broccoli', 
        'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg'),
        new Recipe('Shrimp Paella', 'Delicious shrimp with healthy broccoli', 
        'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg')
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}