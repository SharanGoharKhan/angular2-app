import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingService {
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients:Ingredient[]=[
    new Ingredient('Apples',5),
    new Ingredient('Oranges',10)
  ]
  getIncredients()
  {
      return this.ingredients.slice();
  }
  AddIngredient(ingredientEl:Ingredient)
  {
      this.ingredients.push(ingredientEl);
      this.ingredientChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients:Ingredient[])
  {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

}