describe('angular kabrich.tour TourController (controller)', function () {
  var $compile;
  var $controller;
  var $scope;
  var $state;
  var element;
  var sectionData;

  beforeEach(angular.mock.module('kabrich.tour', function ($provide) {
    $state = {
      go: jasmine.createSpy('$state.go'),
      params: {},
    };

    $provide.factory('$state', function () {
      return $state;
    });

    sectionData = {
      overview: {},
      herp: {},
      derp: {}
    };
    $provide.factory('sectionData', function () {
      return sectionData;
    });
  }));

  beforeEach(angular.mock.module('kabrich.templates'));

  beforeEach(angular.mock.inject(function ($injector) {
    $compile = $injector.get('$compile');
    $controller = $injector.get('$controller');
    $scope = $injector.get('$rootScope').$new();
  }));

  beforeEach(function () {
    element = null;
  });

  describe('slice selection', function () {

    it('selects based on the "section" query parameter and the sliceData property', function () {
      $state.params.section = 'derp';

      var controller = $controller('TourController', {
        $scope: $scope,
      });

      expect(controller.slices).toBe(sectionData.derp);
    });

    it('redirects to "section=overview" if no section is specified', function () {
      delete $state.params.section;

      var controller = $controller('TourController', {
        $scope: $scope,
      });

      expect($state.go).toHaveBeenCalledWith('tour', {
        section: 'overview'
      });
    });

    it('redirects to "section=overview" if no section does not exist', function () {
      $state.params.section = 'blam';

      var controller = $controller('TourController', {
        $scope: $scope,
      });

      expect($state.go).toHaveBeenCalledWith('tour', {
        section: 'overview'
      });
    });

  });

});
