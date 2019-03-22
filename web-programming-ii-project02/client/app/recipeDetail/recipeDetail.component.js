import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './recipeDetail.routes';
import recipe from '../../components/recipeService/recipe.module';
import createReviewModal from '../../components/createReviewModal/createReviewModal.controller';
import review from '../../components/reviewService/review.module';

export class RecipeDetailController {
  /*@ngInject*/
  constructor($routeParams, $uibModal, Recipe, Review) {
    this.Recipe = Recipe;
    this.$routeParams = $routeParams;
    this.Review = Review;
    this.review = review;
    this.$uibModal = $uibModal;
    this.getRecipeData();
  }

  getRecipeData() {
    this.Recipe.getRecipeById(this.$routeParams.id)
      .then(response => {
        this.therecipe = response;
        console.log(this.therecipe)
      })
      .catch(error => {
        console.error(error);
      });
  }
  createReview(recipeId) {
   this.$uibModal.open({
      template: require('../../components/createReviewModal/createReviewModal.html'),
      controller: 'createReviewController as createReviewController',
     resolve: {
       recipeId: () => recipeId
     }
    });
  }

  updateReview(recipeId, reviewId) {
    this.$uibModal.open({
      template: require('../../components/updateReviewModal/updateReviewModal.html'),
      controller: 'updateReviewController as updateReviewController',
      resolve: {
        reviewId: () => reviewId,
        recipeId: () => recipeId
      }
    });
  }

  deleteReview(recipeId, reviewId) {
    this.Review.deleteReview(recipeId, reviewId)
      .then(response => {
        this.reviews = response;
      })
      .catch(error => {
        console.error(error);
      });
  }
  $onInit() {

  }
}

export default angular.module('comp3705App.userDetail', [ngRoute, recipe, review, createReviewModal])
  .config(routing)
  .component('recipeDetail', {
    template: require('./recipeDetail.html'),
    controller: RecipeDetailController,
    controllerAs: 'recipeDetailController'
  })
  .name;
