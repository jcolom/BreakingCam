angular.module('starter.imagedetail', [])

.controller('ImageDetailCtrl', function($location, $scope, $stateParams, Images) {
  var images = Images.query({item_id: $stateParams.item_id}, function (data) {
    $scope.Images = [];
    x=0;
    while(x<images.length) {
      if (images[x].item_id == $stateParams.item_id ){
        $scope.Images.push(images[x]);
      }
      x++;
    }
  });
  $scope.update = function (currentItem) {
      Item.update({id: $scope.Item.code}, currentItem, function (data) {
          $location.path('/');
      });
  };
})
;