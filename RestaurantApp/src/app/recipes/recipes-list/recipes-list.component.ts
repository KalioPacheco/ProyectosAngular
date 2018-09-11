import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[]=[
    new Recipe('Ejemplo 1', 'this a example','https://www.stockthehouse.com/wp-content/uploads/2018/06/pep-pizza.jpg'),
    new Recipe('Ejemplo 1', 'this a example','https://www.stockthehouse.com/wp-content/uploads/2018/06/pep-pizza.jpg'),
    new Recipe('Ejemplo 1', 'this a example','https://www.stockthehouse.com/wp-content/uploads/2018/06/pep-pizza.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}
