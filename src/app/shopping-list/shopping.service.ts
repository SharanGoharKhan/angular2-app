import { Ingredient } from '../shared/ingredient.model';

import {Subject} from 'rxjs/Subject';
export class ShoppingService {
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients:Ingredient[]=[
    new Ingredient('Apples',5),
    new Ingredient('Oranges',10)
  ]
  getIncredients()
  {
      return this.ingredients.slice();
  }
  getIngredient(index:number) {
      return this.ingredients[index];
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
  updateIngredient(index:number,newIngredient:Ingredient){
      this.ingredients[index]=newIngredient;
      this.ingredientChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index:number) {
      this.ingredients.splice(index,1);
      this.ingredientChanged.next(this.ingredients.slice());
  }
}