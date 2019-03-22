import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './recipe.routes';
import {createRecipeController} from "../../components/createRecipeModal/createRecipeModal.controller";

export class RecipeController {
  /*@ngInject*/
  constructor(appConfig, Recipe, $routeParams) {
    this.Recipe = Recipe;
    this.$routeParams = $routeParams;
    this.getRecipeData();
    this.recipe = appConfig.recipe;
  }

  getRecipeData() {
    this.Recipe.getRecipeById(this.$routeParams.id)
      .then(response => {
        this.therecipe = response;
      })
      .catch(error => {
        console.error(error);
      });
  }

  $onInit() {
  }
}

export default angular.module('comp3705App.recipes', [ngRoute])
  .config(routing)
  .component('recipes', {
    template: require('./recipe.html'),
    controller: RecipeController,
    controllerAs: 'recipeController'
  })
  .name;
