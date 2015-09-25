angular.module('kabrich.tour').factory('sectionData', function () {
  var result = {};

  result.cats = [{
    title: 'Cats',
    description: 'Here are some cats!  (Scroll down to see more.)',
    image: 'http://lorempixel.com/1920/1080/cats/1',
  }, {
    title: 'Awwww',
    description: 'what a kitty',
    image: 'http://lorempixel.com/1920/1080/cats/2',
  }, {
    title: '',
    description: 'it would kill you given the chance',
    image: 'http://lorempixel.com/1920/1080/cats/3',
  }];

  result.food = [{
    title: 'Food',
    description: 'Here is some food! (Scroll down to see more.)',
    image: 'http://lorempixel.com/1920/1080/food/1',
  }, {
    title: 'Meat',
    description: 'Meat is nice.',
    image: 'http://lorempixel.com/1920/1080/food/2',
  }, {
    title: 'Whatever this is',
    description: 'looks good.',
    image: 'http://lorempixel.com/1920/1080/food/3',
  }, {
    title: 'So fancy',
    description: 'so fresh.',
    image: 'http://lorempixel.com/1920/1080/food/4',
  }, {
    title: 'Vegetables',
    description: 'they\'re okay too.',
    image: 'http://lorempixel.com/1920/1080/food/5',
  }];

  result.overview = [{
    title: 'hey!',
    description: 'look at this neat website.  scroll down!',
    image: 'http://lorempixel.com/1920/1080/abstract/1',
  }, {
    title: 'This is a demo!',
    description: 'The pictures are just from Lorem Pixel, with silly text just to show usage.',
    image: 'http://lorempixel.com/1920/1080/abstract/2',
  }, {
    title: 'Cats',
    description: 'You want cats?  We have cats! (click for more)',
    image: 'http://lorempixel.com/1920/1080/cats/1',
    link: '#/tour?section=cats',
  }, {
    title: 'Food',
    description: 'Food is great too! (click for more)',
    image: 'http://lorempixel.com/1920/1080/food/1',
    link: '#/tour?section=food',
  }, {
    title: 'That\'s it!',
    description: 'Bye!',
    image: 'http://lorempixel.com/1920/1080/abstract/3',
  }];

  return result;
});
