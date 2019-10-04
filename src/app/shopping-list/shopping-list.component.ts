import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
  new Ingredient('ASADA', 3),
  new Ingredient('POLLO', 3),
  new Ingredient('AL PASTOR', 3),
  new Ingredient('QUESO', 2),
  new Ingredient('PICO DE GALLO', 2),
  new Ingredient('CILANTRO', 1),
  new Ingredient('CREMA', 1),
  new Ingredient('GUACAMOLE', 2),
  ];
  constructor() { }

  ngOnInit() {
  }

}
