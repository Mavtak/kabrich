angular.module('kabrich.layout').directive('content', function () {

  return {
    transclude: true,
    templateUrl: 'kabrich.layout/content/view.html',
    link: link
  };

  function link(scope, element) {
    scope.$on('$stateChangeStart', scrollTop);

    function scrollTop() {
      element[0].scrollTop = 10;
    }
  }
});
