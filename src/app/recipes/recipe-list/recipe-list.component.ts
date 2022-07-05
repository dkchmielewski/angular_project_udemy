import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Shrimp Broccoli', 'Delicious shrimp with healthy broccoli', 
    'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg'),
    new Recipe('Shrimp Broccoli', 'Delicious shrimp with healthy broccoli', 
    'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg'),
    new Recipe('Shrimp Broccoli', 'Delicious shrimp with healthy broccoli', 
    'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}