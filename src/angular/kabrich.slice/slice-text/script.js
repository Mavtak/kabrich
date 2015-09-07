angular.module('kabrich.slice').directive('sliceText', function (
  FrameSizer
) {

  return {
    transclude: true,
    restrict: 'E',
    scope: {},
    templateUrl: 'kabrich.slice/slice-text/view.html',
    link: link,
  };

  function link(scope, element, attributes) {
    var frameSizer = new FrameSizer(element);
    var text = element.children()[0];
    var scale;

    if (typeof attributes.title !== 'undefined') {
      scale = 1;
    } else if (typeof attributes.description !== 'undefined') {
      scale = 0.5;
    }

    scope.style = {};

    updateStyle(true);
    frameSizer.onResize(updateStyle);

    function updateStyle(skipDigest) {
      scope.style['font-size'] = calculateFontSize(frameSizer.getSize(), scale) + 'px';

      if (skipDigest) {
        return;
      }

      scope.$digest();
    }
  }

  function calculateFontSize(frame, scale) {
    //inspired by http://fittextjs.com/
    var reference = (frame.height + frame.width) / 2;
    return  reference / 10 * scale;
  }
});
