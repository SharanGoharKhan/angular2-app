import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[];
  private subscription : Subscription;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
   this.ingredients = this.shoppingService.getIncredients();
  this.subscription = this.shoppingService.ingredientChanged
   .subscribe(
     (ingredEl:Ingredient[])=>{
       this.ingredients = ingredEl;
     }
   )
  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
