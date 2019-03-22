import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './single.routes';

export class SingleController {
  /*@ngInject*/
  constructor(appConfig, User, $routeParams)
  {
    this.single = appConfig.single;
    this.User = User;
    this.$routeParams = $routeParams;
    this.getUserData();
  }

  getUserData()
  {
    this.User.getUserById(this.$routeParams.id)
      .then(response => {
        this.user = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }

  $onInit() {
  }
}


export default angular.module('comp3705App.single', [ngRoute])
  .config(routing)
  .component('single', {
    template: require('./single.html'),
    controller: SingleController,
    controllerAs: 'singleController'
  })
  .name;
