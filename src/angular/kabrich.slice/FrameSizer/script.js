angular.module('kabrich.slice').factory('FrameSizer', function (
  $window
) {

  return FrameSizer;

  function FrameSizer(element) {
    var frame = element.parent()[0];

    this.getSize = getSize;
    this.onResize = onResize;

    function getSize() {
      return {
        height: frame.offsetHeight,
        width: frame.offsetWidth,
      };
    }

    function onResize(callback) {
      angular.element($window).bind('resize', function () {
        callback();
      });
    }
  }
});
