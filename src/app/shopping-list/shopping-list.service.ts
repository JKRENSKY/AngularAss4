import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

ingredientsChanged= new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('ASADA', 3),
        new Ingredient('POLLO', 3),
        new Ingredient('AL PASTOR', 3),
        new Ingredient('QUESO', 2),
        new Ingredient('PICO DE GALLO', 2),
        new Ingredient('CILANTRO', 1),
        new Ingredient('CREMA', 1),
        new Ingredient('GUACAMOLE', 2),
        ];

        getIngredients(){
            return this.ingredients.slice();
        }
        addIngredient(ingredient: Ingredient){
            this.ingredients.push(ingredient);
            this.ingredientsChanged.emit(this.ingredients.slice());
        }
        addIngredients(ingredients: Ingredient[]){
            // for (let ingredient of ingredients){
            //     this.addIngredients(ingredient)
            // }
            this.ingredients.push(...ingredients);
            this.ingredientsChanged.emit(this.ingredients.slice())
        }
    }