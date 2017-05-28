import { Component, OnInit,ViewChild,Output, EventEmitter } from '@angular/core';

import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputName;
  @ViewChild('inputAmount') inputAmount;
  inputElement={};
  ingredient:Ingredient;
  @Output() AddedShoppingElement = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  AddShoppingList()
  {
    this.inputElement['inputName'] = this.inputName.nativeElement.value;
    this.inputElement['inputAmount'] = this.inputAmount.nativeElement.value;
    this.ingredient=new Ingredient(this.inputElement["inputName"],this.inputElement["inputAmount"]);
    this.AddedShoppingElement.emit(this.ingredient);
  }

}
