import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Testing',
      'https://picjumbo.com/wp-content/uploads/bibimbap-korean-cuisine.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'Testing',
      'https://picjumbo.com/wp-content/uploads/bibimbap-korean-cuisine.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'Testing',
      'https://picjumbo.com/wp-content/uploads/bibimbap-korean-cuisine.jpg'
    ),
  ];
}
