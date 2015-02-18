angular.module('starter.itemdetail', [])

.controller('ItemDetailCtrl', function($location, $scope, $stateParams, Item) {
  var items = Item.query({category_id: $stateParams.category_id}, function (data) {
    $scope.Item = [];
    x=0;
    while(x<items.length) {
      if (items[x].category_id == $stateParams.category_id ){
        $scope.Item.push(items[x]);
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