/*import { Recipe } from "../recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { IngredientsService } from "./ingredients.service";


@Injectable() // Decorador para poder agregar un servicio dentro de otro
export class RecipeService {
    //recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe 1', 'This is a simply test ', 'http://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2017/09/1996x1206-hamburguesas.jpg',
            [
                new Ingredient('bread', 2),
                new Ingredient('tomatoes', 3)
            ]),
        new Recipe('A test recipe 2', 'This is a simply test', 'http://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2017/09/1996x1206-hamburguesas.jpg',
            [
                new Ingredient('Beef', 3),
                new Ingredient('garlic', 1)
            ]),
        new Recipe('A test recipe 3', 'This is a simply test', 'http://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2017/09/1996x1206-hamburguesas.jpg',
            [
                new Ingredient('Sauce', 2),
            ])
    ];

    //Crear constructor para utilizar el ingredientsService
    constructor(private ingredientsService: IngredientsService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe( index: number) {
        return this.recipes[index];
    }

    //Metodo para invocar desde la vista
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.ingredientsService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe)
    }

    updateRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe;
    }

}*/

import { Recipe } from "../recipes/recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { IngredientsService } from "./ingredients.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    //recipeSelected = new EventEmitter<Recipe>();
    RecipeNext = new Subject<Recipe[]>();
    RecipeEditing = new Subject<number>();
    private recipes: Recipe[] = [
        new Recipe('A test recipe 1', 'This is a simply test ', 'http://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2017/09/1996x1206-hamburguesas.jpg',
            [
                new Ingredient('bread', 2),
                new Ingredient('tomatoes', 3)
            ]),
        new Recipe('A test recipe 2', 'This is a simply test', 'http://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2017/09/1996x1206-hamburguesas.jpg',
            [
                new Ingredient('Beef', 3),
                new Ingredient('garlic', 1)
            ]),
        new Recipe('A test recipe 3', 'This is a simply test', 'http://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2017/09/1996x1206-hamburguesas.jpg',
            [
                new Ingredient('Sauce', 2),
            ])
    ];
    getRecipes() {
        return this.recipes.slice();
    }
    constructor(private ingredientsService: IngredientsService) {

    }
    getRecipe(index: number) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.ingredientsService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.RecipeNext.next(this.recipes.slice());
        console.log(this.getRecipes())
    }
    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.RecipeNext.next(this.recipes.slice());
    }



}