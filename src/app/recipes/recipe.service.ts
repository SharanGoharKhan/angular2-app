import {Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes:Recipe[] = [                                                                                                             
    new Recipe('Burger','Perfect tasty burger',
    'http://bnbjoint.com/wp-content/uploads/2015/04/Thunder_Road_full-300dpi.jpg', 
    [ new Ingredient('Buns',1), new Ingredient('fries',100) ]),
    new Recipe('Lasania',
    'Perfect tasty lasania','https://static01.nyt.com/images/2015/07/27/dining/27SPAGHETTI/27SPAGHETTI-superJumbo.jpg',
     [ new Ingredient('Cheese',1), new Ingredient('tomatoes',40)])
  ];
  constructor(private shlService:ShoppingService){}
  getRecipes() {
      return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients:Ingredient[])
  {
    this.shlService.addIngredients(ingredients);
  }
  getRecipeByIndex(id:number)
  {
    return this.recipes.slice()[id];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number ,recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}