'use strict';

angular.module('vicyork')
  .config(function($stateProvider) {
    // Home states
    $stateProvider
      .state('blog', {
        url: '/blog',
        templateUrl: 'client/app/blog/blog.html',
        controller: 'BlogController',
        controllerAs: 'vm'
      })
      /*.state('home.main', {
       url: "/",
       templateUrl: "partials/state1.html"
       })
       .state('state1.list', {
       url: "/list",
       templateUrl: "partials/state1.list.html",
       controller: function($scope) {
       $scope.items = ["A", "List", "Of", "Items"];
       }
       })
       .state('state2', {
       url: "/state2",
       templateUrl: "partials/state2.html"
       })
       .state('state2.list', {
       url: "/list",
       templateUrl: "partials/state2.list.html",
       controller: function($scope) {
       $scope.things = ["A", "Set", "Of", "Things"];
       }
       })*/;
  });
