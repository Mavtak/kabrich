angular.module('kabrich.slice').directive('slice', function () {

  return {
    restrict: 'E',
    scope: {
      description: '=',
      image: '=',
      link: '=',
      title: '=',
    },
    templateUrl: 'kabrich.slice/slice/view.html'
  };

});
