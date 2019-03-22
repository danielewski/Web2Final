'use strict';

export function ReviewService($resource) {
  'ngInject';
  var Review = {

    deleteReview(recipeId, reviewId) {
      let createResource = $resource('/api/recipes/'+recipeId+'/reviews/'+reviewId+'', null,
        {
          create: {method: 'DELETE'}
        });
      return createResource.delete({}, ).$promise;
    },

    updateReview(recipeId, reviewId, review) {
      let updateResource = $resource('/api/recipes/'+recipeId+'/reviews/'+reviewId+'', null,
        {
          update: { method: 'PUT' }
        });
      return updateResource.update({ id: review._id }, review).$promise;
    },

    createReview(recipeId, review) {
      let createResource = $resource('/api/recipes/'+recipeId+'/reviews/', null,
        {
          create: {method: 'POST'}
        });
      return createResource.create({id: review._id}, review).$promise;
    },
  }

  return Review;
}
