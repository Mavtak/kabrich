angular.module('kabrich.tour').controller('TourController', function (
  $state,
  sectionData
) {
  this.slices = sectionData[$state.params.section];

  if (typeof this.slices === 'undefined') {
    $state.go('tour', {
      section: 'overview'
    });
  }
});
