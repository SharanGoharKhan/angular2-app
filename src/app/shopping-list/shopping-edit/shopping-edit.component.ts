import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from 'rxjs/Subscription'; 

import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm:NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem:Ingredient;

  constructor(private shoppingService:ShoppingService) { }
  ngOnInit() {
   this.subscription = this.shoppingService.startedEditing
    .subscribe(
      (index:number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }
  AddShoppingList(form:NgForm)
  {
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    this.shoppingService.AddIngredient(newIngredient);
  }
  ngOnDestroy() {

  }

}
