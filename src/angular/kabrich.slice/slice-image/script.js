angular.module('kabrich.slice').directive('sliceImage', function (
  FrameSizer
) {

  return {
    restrict: 'E',
    scope: {
      image: '=',
    },
    templateUrl: 'kabrich.slice/slice-image/view.html',
    link: link,
  };

  function link(scope, element) {
    var frameSizer = new FrameSizer(element);
    var image = element.children()[0];
    var aspectRatio;

    angular.element(image).on('load', initialize);

    function initialize() {
      aspectRatio =  calculateAspectRatio(image);
      updateStyle();
      angular.element(image).removeAttr('loading');

      frameSizer.onResize(updateStyle);
    }

    function updateStyle() {
      scope.style = calculateFittingSize(image, aspectRatio, frameSizer.getSize());
      scope.$digest();
    }
  }

  function calculateAspectRatio(image) {
    return image.width / image.height;
  }

  function calculateFittingSize(image, imageAspectRatio, frame) {
    var result = {};
    var frameAspectRatio = frame.width / frame.height;

    if (frameAspectRatio > imageAspectRatio) {
      result.height = frame.width / imageAspectRatio;
      result.width = frame.width;
    } else {
      result.height = frame.height;
      result.width = frame.height * imageAspectRatio;
    }

    result.top = ((frame.height - result.height) / 2);
    result.left = ((frame.width - result.width) / 2);

    result.height += 'px';
    result.width += 'px';
    result.top += 'px';
    result.left += 'px';

    return result;
  }
});
