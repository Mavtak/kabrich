describe('angular kabrich.frame slice (directive)', function () {
  var $compile;
  var $scope;
  var element;

  beforeEach(angular.mock.module('kabrich.slice'));
  
  beforeEach(angular.mock.module('kabrich.templates'));

  beforeEach(angular.mock.inject(function ($injector) {
    $compile = $injector.get('$compile');
    $scope = $injector.get('$rootScope').$new();
  }));

  beforeEach(function () {
    $scope.attributes = {
      description: 'the description',
      image: '/the/image.jpg',
      link: '/the/link',
      title: 'the title',
    };

    element = $compile('<slice description="attributes.description" image="attributes.image" link="attributes.link" title="attributes.title"></slice>')($scope);
    $scope.$digest();
  });

  describe('the slice-text tags', function () {

    it('it has two', function () {
      expect(element.find('slice-text').length).toEqual(2);
    });

    describe('the first one', function () {

      it('is used for the title', function () {
        expect(element.find('slice-text').eq(0).text()).toEqual('the title\n');
      });

    });

    describe('the second one', function () {

      it('is used for the description', function () {
        expect(element.find('slice-text').eq(1).text()).toEqual('the description\n');
      });

    });

  });

  describe('the slice-image tags', function () {

    it('has one', function () {
      expect(element.find('slice-image').length).toEqual(1);
    });

    it('is used for the image', function () {
      expect(element.find('slice-image').find('img').attr('src')).toEqual('/the/image.jpg');
    });

  });

  describe('the a tags', function () {

    it('has one', function () {
      expect(element.find('a').length).toEqual(1);
    });

  });

});
