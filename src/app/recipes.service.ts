import { Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Injectable({
  	providedIn: 'root'
})
export class RecipeService {

	private recipes: Recipe[] = [
		{
			id: '1',
			title: 'Thosai',
			imageUrl: '../../assets/Thosai.jpg',
			ingredients: ['rice flour', 'curry', 'chutney']
		},
		{
			id: '2',
			title: 'Idli',
			imageUrl: '../../assets/Idli.jpg',
			ingredients: ['rice flour', 'curry', 'chutney']
		},
		{
			id: '3',
			title: 'Pongal',
			imageUrl: '../../assets/Pongal.jpg',
			ingredients: ['rice', 'daal', 'ghee', 'cashew nuts', 'mild spices']
		}
	];

	constructor() { }

	getAll() {
		return [...this.recipes];
	}

	getById(recipeId: string) {
		return this.recipes.find(c => c.id === recipeId);
	}

	deleteById(recipeId: string) {
		this.recipes = this.recipes.filter(c => c.id !== recipeId);
	}
}
