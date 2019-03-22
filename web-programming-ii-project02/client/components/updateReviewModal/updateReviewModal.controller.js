import angular from 'angular';

export class UpdateReviewController {
  /*@ngInject*/
  constructor($uibModalInstance, Review, recipeId, reviewId) {
    this.Review = Review;
    this.recipeId = recipeId;
    this.reviewId = reviewId;
    this.$uibModalInstance = $uibModalInstance;
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }

  submitForm() {
    this.Review.updateReview(this.recipeId, this.reviewId, this.review)
      .then(result => {
        this.formInfo = 'Review successfully updated!';
      })
      .catch(err => {
        console.error(err);
        this.formError = err.toString();
      });
    this.$uibModalInstance.close();
    this.$route.reload();
  }
}

export default angular.module('comp3705App.updateReviewModal', [])
  .controller('updateReviewController', UpdateReviewController)
  .config(['$qProvider', function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }])
  .name;
