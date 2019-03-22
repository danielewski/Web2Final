'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/recipe/:id', {
    template: '<recipe></recipe>'
  });
}
