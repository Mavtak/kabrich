describe('angular kabrich.layout app (directive)', function () {
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
    element = $compile('<app></app>')($scope);
    $scope.$digest();
  });

  it('contains a header', function () {
    expect(element.find('header').length).toEqual(1);
  });

  it('contains a content', function () {
    expect(element.find('content').length).toEqual(1);
  });

  it('puts the UI view in the content', function () {
    expect(element.find('content').find('ui-view').length).toEqual(1);
  });

});
