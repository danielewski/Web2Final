import angular from 'angular';


export class createReviewController {
  /*@ngInject*/
  constructor($uibModalInstance, Review, recipeId) {
    this.Review = Review;
    this.recipeId = recipeId;
    this.$uibModalInstance = $uibModalInstance;
    //this.recipe = recipe;
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }

  submitForm() {
    this.Review.createReview(this.recipeId, this.review)
      .then(result => {
        this.formInfo = 'Review successfully created! _Id: '+ result._id ;
      })
      .catch(err => {
        console.error(err);
        this.formError = err.toString();
      });
    this.$uibModalInstance.close();
    this.$route.reload();
  }
}

export default angular.module('comp3705App.createReviewModal', [])
  .controller('createReviewController', createReviewController)
  .config(['$qProvider', function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }])
  .name;
