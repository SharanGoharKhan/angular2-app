import {Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {

    //recipeSelected = new EventEmitter<Recipe>();
    
    private recipes:Recipe[] = [                                                                                                             
    new Recipe('Burger','Perfect tasty burger',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', 
    [ new Ingredient('Buns',1), new Ingredient('fries',100) ]),
    new Recipe('Lasania',
    'Perfect tasty lasania','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
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
}