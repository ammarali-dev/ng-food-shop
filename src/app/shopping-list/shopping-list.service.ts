import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export default class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ings: Ingredient[]) {
    this.ingredients.push(...ings);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
