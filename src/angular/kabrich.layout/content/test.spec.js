describe('angular kabrich.layout content (directive)', function () {
  var $compile;
  var $scope;
  var $templateCache;
  var element;

  beforeEach(angular.mock.module('kabrich.layout'));
  
  beforeEach(angular.mock.module('kabrich.templates'));

  beforeEach(angular.mock.inject(function ($injector) {
    $compile = $injector.get('$compile');
    $scope = $injector.get('$rootScope').$new();
  }));

  beforeEach(function () {
    element = $compile('<content >something!  I dunno!</content>')($scope);
    $scope.$digest();
  });

  it('transcludes content', function () {
    expect(element.text()).toEqual('something!  I dunno!\n');
  });

  it('scrolls to top on navigate', function () {
    //TODO: test this
  });

});
