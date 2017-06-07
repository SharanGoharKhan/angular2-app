import { Component, OnInit} from '@angular/core';

import {Ingredient} from '../../shared/ingredient.model';

import { ShoppingService } from '../shopping.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  inputElement={};
  ingredient:Ingredient;
  //@Output() AddedShoppingElement = new EventEmitter<Ingredient>();
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
  }
  AddShoppingList(form:NgForm)
  {
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    this.shoppingService.AddIngredient(newIngredient);
  }

}
