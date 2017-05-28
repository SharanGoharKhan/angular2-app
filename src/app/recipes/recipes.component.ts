import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeEl:Recipe;
  constructor() { }

  ngOnInit() {
  }
  handleEventRecipeClicked(recipe:Recipe)
  {
    this.recipeEl=recipe;
  }
}
