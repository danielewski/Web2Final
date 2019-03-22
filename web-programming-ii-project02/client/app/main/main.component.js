import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';

import updateUserModal from '../../components/updateUserModal/updateUserModal.controller';
import deleteUserModal from '../../components/updateUserModal/deleteUserModal.controller';
import createUserModal from '../../components/createUserModal/createUserModal.controller';
import userService from '../../components/userService/user.module';

import createRecipeModal from '../../components/createRecipeModal/createRecipeModal.controller';
import updateRecipeModal from '../../components/updateRecipeModal/updateRecipeModal.controller';
import recipeService from '../../components/recipeService/recipe.module';
import createReviewModal from '../../components/createReviewModal/createReviewModal.controller';
import reviewService from '../../components/reviewService/review.module';
import updateReviewModal from '../../components/updateReviewModal/updateReviewModal.controller';

export class MainController {
  /*@ngInject*/
  constructor($http, $uibModal, User, Recipe, Review) {
    this.$http = $http;
    this.User = User;
    this.Recipe = Recipe;
    this.Review = Review;
    this.$uibModal = $uibModal;

    this.pageChanged();
    this.setData();
    this.setPage();
    this.getUserData();
    this.getRecipeData();

    this.maxSize = 7;
    this.totalItems = 5;
    this.currentPage = 4;
  }

  setPage(pageNo) {
    this.currentPage = pageNo;
  };

  pageChanged() {
    console.log('Page changed to: ' + this.currentPage);
  };

  setData() {
    this.values = ['first', 'second', 'third'];
    this.valueToSquare = 4;
  }

  getUserData() {
    this.User.getAllUsers()
      .then(response => {
        this.users = response;
      })
      .catch(error => {
        console.error(error);
      });
  }

  getRecipeData() {
    this.Recipe.getAllRecipes()
      .then(response => {
        this.recipes = response;
      })
      .catch(error => {
        console.error(error);
      });
  }

  deleteRecipeData(recipe) {
    this.Recipe.deleteRecipeById(recipe._id)
      .then(response => {
        this.recipes = response;
      })
      .catch(error => {
        console.error(error);
      });
  }

  deleteUserData(user) {
    this.User.deleteUserById(user._id)
      .then(response => {
        this.users = response;
      })
      .catch(error => {
        console.error(error);
      });
  }

  updateUser(user) {
    this.$uibModal.open({
      template: require('../../components/updateUserModal/updateUserModal.html'),
      controller: 'updateUserController as updateUserController',
      resolve: {
        user: () => user
      }
    });
  }

  updateRecipe(recipe) {
    this.$uibModal.open({
      template: require('../../components/updateRecipeModal/updateRecipeModal.html'),
      controller: 'updateRecipeController as updateRecipeController',
      resolve: {
        recipe: () => recipe
      }
    });
  }

  deleteUser(){
    this.$uibModal.open({
      template: require('../../components/updateUserModal/updateUserModal.html'),
      controller: 'deleteUserController as deleteUserController',
    });
  }

  createUser() {
    this.$uibModal.open({
      template: require('../../components/createUserModal/createUserModal.html'),
      controller: 'createUserController as createUserController',
    });
  }

  createRecipe() {
    this.$uibModal.open({
      template: require('../../components/createRecipeModal/createRecipeModal.html'),
      controller: 'createRecipeController as createRecipeController',
    });
  }


  $onInit() {
  }
}

export function SquareFilter() {
  var squareFunction = function(value) {
    return value * value;
  }
  return squareFunction;
}

export default angular.module('comp3705App.main', [ngRoute, userService, updateUserModal, createUserModal, createReviewModal,updateReviewModal ,reviewService, recipeService, createRecipeModal, updateRecipeModal, deleteUserModal])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: 'mainController'
  })
  .filter('Square', SquareFilter)
  .name;
