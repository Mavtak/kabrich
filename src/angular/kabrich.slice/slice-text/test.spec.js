describe('angular kabrich.slice slice-text (directive)', function () {
  var $compile;
  var $scope;
  var element;
  var frameSizer;

  beforeEach(angular.mock.module('kabrich.slice', function ($provide) {
    frameSizer = null;

    $provide.factory('FrameSizer', function () {
      return FakeFrameSizer;
    });
  }));
  
  beforeEach(angular.mock.module('kabrich.templates'));

  beforeEach(angular.mock.inject(function ($injector) {
    $compile = $injector.get('$compile');
    $scope = $injector.get('$rootScope').$new();
  }));

  beforeEach(function () {
    element = {};
    element.title = $compile('<slice-text title>this is a thing!</slice-text>')($scope);
    element.description = $compile('<slice-description title>this is a thing!</slice-text>')($scope);
    $scope.$digest();
  });

  beforeEach(function (done) {
    setTimeout(done, 1);
  });

  beforeEach(function () {
    $scope.$digest();
  });

  describe('the font-size style', function () {

    it('has one', function () {
      frameSizer.triggerResize(500, 500);
      expect(getFontSize(element.title)).toMatch(/[0-9]+px/);
    });

    it('gets bigger when the frame gets wider', function () {
      frameSizer.triggerResize(500, 500);
      var before = getFontSize(element.title, true);

      frameSizer.triggerResize(500, 600);
      var after = getFontSize(element.title, true);

      expect(after).toBeGreaterThan(before);
    });

    it('gets bigger when the frame gets taller', function () {
      frameSizer.triggerResize(500, 500);
      var before = getFontSize(element.title, true);

      frameSizer.triggerResize(600, 500);
      var after = getFontSize(element.title, true);

      expect(after).toBeGreaterThan(before);
    });

    it('stays the same size if frame dimensions switch', function () {
      frameSizer.triggerResize(500, 400);
      var before = getFontSize(element.title, true);

      frameSizer.triggerResize(400, 500);
      var after = getFontSize(element.title, true);

      expect(after).toEqual(before);
    });

    it('is bigger for titles than descriptions', function () {
        frameSizer.triggerResize(500, 400);
        var title = getFontSize(element.title, true);
        var description = getFontSize(element.description, true);

        expect(title).toBeGreaterThan(description);
    });

  });

  function getFontSize(element, parseNumber) {
    var result = element.css('font-size');
    if (typeof result === 'string' && result !== '') {
      if (parseNumber) {
        result = result.replace('px', '');
      }

      return result;
    }

    var children = element.children();
    for (var i = 0; i < children.length; i++) {
      result = getFontSize(children.eq(i));
      if (result) {
        return result;
      }
    }

    return '';
  }

  function FakeFrameSizer() {
    this.height = 300;
    this.width = 400;

    frameSizer = this;
    this.callbacks = [];

    this.triggerResize = function (height, width) {
      this.height = height;
      this.width = width;

      for(var i = 0; i < this.callbacks.length; i++) {
        this.callbacks[i]();
      }
    };

    this.getSize = function () {
      return {
        height: this.height,
        width: this.width,
      };
    };

    this.onResize = function(callback) {
      this.callbacks.push(callback);
    };
  }
});
