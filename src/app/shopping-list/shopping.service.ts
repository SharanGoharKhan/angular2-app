import { Ingredient } from '../shared/ingredient.model';

import {Subject} from 'rxjs/Subject';
export class ShoppingService {
    ingredientChanged = new Subject<Ingredient[]>();
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
      this.ingredientChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients:Ingredient[])
  {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

}