'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

const ngRoute = require('angular-route');

import uiBootstrap from 'angular-ui-bootstrap';

import {
  routeConfig
} from './app.config';

import main from './main/main.component';
import about from './about/about.component';
import constants from './app.constants';
import recipe from './recipes/recipe.component';
import util from '../components/util/util.module';
import userDetail from './userDetail/userDetail.component';
import recipeDetail from './recipeDetail/recipeDetail.component';

import './app.scss';

angular.module('comp3705App', [ngCookies, ngResource, ngSanitize, ngRoute, uiBootstrap,
  main, recipe, about, constants, util, userDetail, recipeDetail
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['comp3705App'], {
      strictDi: true
    });
  });
