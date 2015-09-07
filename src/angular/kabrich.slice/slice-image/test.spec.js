describe('angular kabrich.slice slice-image (directive)', function () {
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
    $scope.attributes = {
      image: image40pxx30px()
    };

    element = $compile('<slice-image image="attributes.image"></slice-image>')($scope);
    $scope.$digest();
  });

  beforeEach(function (done) {
    setTimeout(done, 1);
  });

  beforeEach(function () {
    $scope.$digest();
  });

  describe('the img tag', function () {

    it('has one', function () {
      expect(element.find('img').length).toEqual(1);
    });

    it('has the src attribute set', function () {
      expect(element.find('img').attr('src')).toEqual(image40pxx30px());
    });

    describe('sizing and positioning', function () {

      it('does not change any size when things already fit', function () {
        frameSizer.triggerResize(30, 40);

        expect(element.find('img').css('height')).toEqual('30px');
        expect(element.find('img').css('width')).toEqual('40px');
        expect(element.find('img').css('top')).toEqual('0px');
        expect(element.find('img').css('left')).toEqual('0px');
      });


      it('shrinks smaller images to fit peftectly', function () {
        frameSizer.triggerResize(3, 4);

        expect(element.find('img').css('height')).toEqual('3px');
        expect(element.find('img').css('width')).toEqual('4px');
        expect(element.find('img').css('top')).toEqual('0px');
        expect(element.find('img').css('left')).toEqual('0px');
      });

      it('stretches smaller images to fit peftectly', function () {
        frameSizer.triggerResize(300, 400);

        expect(element.find('img').css('height')).toEqual('300px');
        expect(element.find('img').css('width')).toEqual('400px');
        expect(element.find('img').css('top')).toEqual('0px');
        expect(element.find('img').css('left')).toEqual('0px');
      });

      it('stretches smaller images to fit, cropping the top and bottom when necessary', function () {
        frameSizer.triggerResize(200, 400);

        expect(element.find('img').css('height')).toEqual('300px');
        expect(element.find('img').css('width')).toEqual('400px');
        expect(element.find('img').css('top')).toEqual('-50px');
        expect(element.find('img').css('left')).toEqual('0px');
      });

      it('stretches smaller images to fit peftectly, cropping the sides when necessary', function () {
        frameSizer.triggerResize(300, 300);

        expect(element.find('img').css('height')).toEqual('300px');
        expect(element.find('img').css('width')).toEqual('400px');
        expect(element.find('img').css('top')).toEqual('0px');
        expect(element.find('img').css('left')).toEqual('-50px');
      });

    });

  });

  function image40pxx30px() {
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAIAAADRv8uKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNvyMY98AAAM4SURBVEhL7ZVJKK1hGMePIcNSyVAnWRArZEo6SxkKiWRIGUosDHEokaEsZCPXuLCwYKGwQJkWpJAkZExiYcgQIWPCub9zns9xcO9dHndx/ouv//N/nvf7f+d53vc9Kt0PwWJsNliMzQaL8f7+/vb2thK84/Lycm5u7unpSYn/jre3t8XFxY2NDSU2wcPDw/T09PX1tYSfjI+Ojuzs7FQqFRWivLy8xMfHowi6urpE/yOampocHByk0tPTc2lpSUnodPn5+aKDuro6lE/GOTk5arWa3OTkpChJSUmhoaH39/dw3kvq8PBQUt9hb2+/ubkJOT4+DggISE5OFr2iosLV1XV9fR0+MDDAS/hhH8ZTU1NIExMTPMfGxlAeHx9tbW17enqkALC+paWlo6OjoaHh6upKxF8GCDciLy8vJCREuK+vb01NjXAQHh5eVFT0YazRaMrKypil0Xh1dRW+s7MjBSAoKKiwsBDi5eWVlpYGWVlZoWZwcNCQV7C8vOzk5FRfXw9ntBSMjIxICrAwKipKMe7s7CQNMTXmCT87OzOU6BETEyMN7O/vJ0UzaGlqaqpkAaNBt7a2rqqqEmVvbw9ldnZWQlBcXOzv7683u729dXFxGRoagi8sLBiNx8fH4ScnJ/pyAyIjI1NSUoTLpsPDtIAptLe3a7VaUhigcEzgMzMzUgAKCgoCAwP1xgzD3d29vLy8urqa2VDHLuvu7v7eaj8/v9LSUuFtbW1k+cUSfsHo6CjZtbW1762mK7GxsXpj3pWZmZmRkZGYmEgzqePJR9zd3VlZWfX29sqC5+dnGxsbGefFxQUnp7KykuLW1lYpMIV0mE+He3t719bWig7Ya42NjcqMjeDss8B4jhMSEpjH/Pw8t0dYWJibm5voWVlZERERkJKSEkdHR/YBV0dubi6Vr6+vBwcH6enpnEyuAWropbOzc19fHzXNzc28nzP51Xhra8vUmBMcHR2NAnx8fNiuiLLp5MiC4OBgQkhcXBwjN9SqEIeHh6UAZGdn0zx0Dw8PaftXY3B+fq6wd9zc3HCpKcE/wdHnojg9PVViEzCp3d1dJfiP/iTMBoux2WAxNht+yFin+w19l1oKtZO1tgAAAABJRU5ErkJggg==';
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
