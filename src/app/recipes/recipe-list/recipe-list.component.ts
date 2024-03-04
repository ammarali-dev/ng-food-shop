import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Recipe',
      'Testing',
      'https://picjumbo.com/wp-content/uploads/bibimbap-korean-cuisine.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'Testing',
      'https://picjumbo.com/wp-content/uploads/bibimbap-korean-cuisine.jpg'
    ),
    new Recipe(
      'Tasty',
      'Testing',
      'https://picjumbo.com/wp-content/uploads/bibimbap-korean-cuisine.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
