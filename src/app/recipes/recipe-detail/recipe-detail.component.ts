import { Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute,Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  id:number;
  recipe:Recipe;
  paramsSubscription: Subscription;
  constructor(private recipeService:RecipeService,private route:ActivatedRoute,private router:Router) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params
    .subscribe(
      (params:Params) => {
        this.id = params['id'];
        this.recipe=this.recipeService.getRecipeByIndex(params['id']);
      }
    )
  }
  onAddToShoppingList()
  {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient);
  }
  ngOnDestroy()
  {
    this.paramsSubscription.unsubscribe();
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
