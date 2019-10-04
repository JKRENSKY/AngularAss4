import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Just a test', 'https://www.tacobell.com/medias/blog-2019-new-menu-header.jpg?context=bWFzdGVyfGltYWdlc3wxNjYyNzd8aW1hZ2UvanBlZ3xpbWFnZXMvaDFhL2g5OC84OTI4NTEyMTE0NzE4LmpwZ3xjMjA5YzZjNTQyMmM0MWM1ZWE5N2Q1OGQ0NDJjYWVkMzdiNTE0MjMyMjRhMzhmMTZjNGEwYTc4YmMwOGYwOWYx'),
    new Recipe('A test recipe', 'Just a test', 'https://www.tacobell.com/medias/blog-2019-new-menu-header.jpg?context=bWFzdGVyfGltYWdlc3wxNjYyNzd8aW1hZ2UvanBlZ3xpbWFnZXMvaDFhL2g5OC84OTI4NTEyMTE0NzE4LmpwZ3xjMjA5YzZjNTQyMmM0MWM1ZWE5N2Q1OGQ0NDJjYWVkMzdiNTE0MjMyMjRhMzhmMTZjNGEwYTc4YmMwOGYwOWYx')
  ];
  constructor() { }

  ngOnInit() {
  }

}
