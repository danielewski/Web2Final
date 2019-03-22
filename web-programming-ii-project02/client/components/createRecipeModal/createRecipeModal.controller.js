import angular from 'angular';

export class createRecipeController {
  /*@ngInject*/
  constructor($uibModalInstance, Recipe) {
    this.Recipe = Recipe;
    this.$uibModalInstance = $uibModalInstance;
    //this.recipe = recipe;
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }

  submitForm() {
    this.Recipe.createRecipe(this.recipe)
      .then(result => {
        this.formInfo = 'Recipe successfully created! _Id: '+ result._id ;
      })
      .catch(err => {
        console.error(err);
        this.formError = err.toString();
      });
    this.$uibModalInstance.close();
    this.$route.reload();
  }

}

export default angular.module('comp3705App.createRecipeModal', [])
  .controller('createRecipeController', createRecipeController)
  .config(['$qProvider', function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }])
  .name;
