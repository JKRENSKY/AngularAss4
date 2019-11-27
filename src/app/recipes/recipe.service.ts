import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Asada Taco', 
            'Taco with beef', 
            'https://www.tacobell.com/medias/blog-2019-new-menu-header.jpg?context=bWFzdGVyfGltYWdlc3wxNjYyNzd8aW1hZ2UvanBlZ3xpbWFnZXMvaDFhL2g5OC84OTI4NTEyMTE0NzE4LmpwZ3xjMjA5YzZjNTQyMmM0MWM1ZWE5N2Q1OGQ0NDJjYWVkMzdiNTE0MjMyMjRhMzhmMTZjNGEwYTc4YmMwOGYwOWYx',
            [
                    new Ingredient('Beef', 1),
                    new Ingredient ('Tortilla', 1)
            ]),
        new Recipe(
            'Al Pastor Taco', 
            'Al Pastor taco cooked with pineapple - Fucking. Perfect.', 
            'https://www.inspiredtaste.net/wp-content/uploads/2018/03/Easy-Ground-Pork-Tacos-Recipe-3-1200.jpg',
            [
                new Ingredient('Pork', 1),
                new Ingredient ('Tortilla', 1),
                new Ingredient ('Pineapple', 1)
            ]),
         new Recipe(
            'BEEFCAKE', 
            'BEEEEEEEEEEFCAAAAAAAKE', 
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/11/20/0/CCGER105_Alton-Browns-Meatloaf_s4x3.jpg.rend.hgtvcom.616.462.suffix/1542723820820.jpeg',
            [
                new Ingredient('BEEF', 10),
                new Ingredient ('CAKE', 5),
                
            ]),
            new Recipe(
              'Nachos', 
              'Oh fuck yeah.', 
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdBuHJrQS94HqbqPJryyBEnLhINqOmJ3HOHoZhwQ65wPb-rTEJg&s',
              [
                  new Ingredient('Tortilla Chips (bag)', 1),
                  new Ingredient ('Jack Cheese', 1),
                  new Ingredient ('Beans (can)', 1),
                  new Ingredient ('Sliced Jalapenos', 1),
                  new Ingredient ('Diced Pepper and Onion', 1),
              ])
      ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

