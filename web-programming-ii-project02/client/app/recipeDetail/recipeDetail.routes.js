'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/recipe/:id', {
    template: '<recipe_detail></recipe_detail>'
  });

}

