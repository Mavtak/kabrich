describe('angular kabrich.layout header (directive)', function () {
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
    element = $compile('<header></header>')($scope);
    $scope.$digest();
  });

  it('is totally useless right now', function () {
    expect(element.html()).toEqual('');
  });

});
