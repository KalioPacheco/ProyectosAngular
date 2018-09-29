import { Recipe } from '../recipes/recipe.model';

export class RecipeService {
     private recipes: Recipe[] = [
     new Recipe('Pizza1', 'This is a simply test1',
      'http://www.titospizzaandwings.com/wp-content/uploads/2016/07/3toppingpizza.jpg'),
     new Recipe('Pizza2', 'This is a simply test2',
      'http://www.titospizzaandwings.com/wp-content/uploads/2016/07/3toppingpizza.jpg'),
     new Recipe('Pizza3', 'This is a simply test3',
      'http://www.titospizzaandwings.com/wp-content/uploads/2016/07/3toppingpizza.jpg'),
     new Recipe('Pizza4', 'This is a simply test4',
      'http://www.titospizzaandwings.com/wp-content/uploads/2016/07/3toppingpizza.jpg'),
      new Recipe('Tacos5', 'This is a simply test5',
      'https://www.happycoffeemao.com/web/wp-content/uploads/2017/09/tacos.jpg')
  ];
  getRecipes() {
      return this.recipes.slice();
  }
}
