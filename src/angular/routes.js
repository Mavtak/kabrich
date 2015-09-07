angular.module('kabrich').config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/tour');

  $stateProvider.state('tour', {
    url: '/tour?section',
    controller: 'TourController',
    controllerAs: 'controller',
    templateUrl: 'kabrich.tour/TourController/view.html',
  });
});
