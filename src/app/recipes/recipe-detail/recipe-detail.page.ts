import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.page.html',
	styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

	recipe: Recipe;

	constructor(private router: Router, private activatedRoute: ActivatedRoute, private recipeService: RecipeService,
		private alertCtrl: AlertController) { }

	ngOnInit() {
		this.activatedRoute.paramMap.subscribe((paramMap) => {
			if (!paramMap.has('recipeId')) {
				this.router.navigate(['/recipes']);
				return;
			}

			const recipeId = paramMap.get('recipeId');
			this.recipe = this.recipeService.getById(recipeId);
		});
	}

	deleteRecipe() {
		this.alertCtrl.create({
			header: 'Are you sure?',
			message: 'Do you really want to delete the receipe?',
			buttons: [{
				text: 'Cancel',
				role: 'cancel'
			}, {
				text: 'Delete',
				handler: () => {
					this.recipeService.deleteById(this.recipe.id);
					this.router.navigate(['/recipes']);
				}
			}]
		  }).then(alerEl => {
			  alerEl.present();
		  });
	}

}
