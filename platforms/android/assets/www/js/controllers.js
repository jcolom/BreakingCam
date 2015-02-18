angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $ionicModal, $timeout, $state) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.Login = function(user) {
    $scope.closeLogin();
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CameraCtrl', function($scope, $cordovaCamera) {
  $scope.takePicture = function() {
    console.log('Getting camera');

    var options = {
	    quality: 75,
	    destinationType: Camera.DestinationType.DATA_URL,
	    sourceType: Camera.PictureSourceType.CAMERA,
	    allowEdit: true,
	    encodingType: Camera.EncodingType.JPEG,
	    targetWidth: 320,
	    targetHeight: 320,
	    popoverOptions: CameraPopoverOptions,
	    saveToPhotoAlbum: false
	  };

    // passing options in as a parameter
    $cordovaCamera.getPicture(options).then(function(imageData) {
      console.log(imageData);
      $scope.imageURI = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      console.err(err);
    });
  }
  $scope.Done = function() {
  	console.log('Image & description done');
  	console.log(imageData);
  }
})

.controller('CategoryListCtrl', function ($location, $scope, Category) {
    Category.query(function (data) {
        $scope.categories = data;
    });
    $scope.insert = function (currentCategory) {
        Category.add({}, currentCategory);
        $location.path('/categories');
    };
    $scope.remove = function (currentCategory) {
        Category.remove({id: id}, {}, function (data) {
            $location.path('/');
        });
    };
})

.controller('ItemDetailCtrl', function($location, $scope, $stateParams, Item) {
        var items = Item.query({category_id: $stateParams.category_id}, function (data) {
          $scope.Item = [];
          for(x=0; x<items.length; x++) {
               if (items[x].category_id == $stateParams.category_id ){
                  $scope.Item.push(items[x]);
               }
          }
        });
        $scope.update = function (currentItem) {
            Item.update({id: $scope.Item.code}, currentItem, function (data) {
                $location.path('/');
            });
        };

    })

.controller('ImageDetailCtrl', function($location, $scope, $stateParams, Images) {
        var images = Images.query({item_id: $stateParams.item_id}, function (data) {
          $scope.Images = [];
          for(x=0; x<images.length; x++) {
               if (images[x].item_id == $stateParams.item_id ){
                  $scope.Images.push(images[x]);
               }
          }
        });
        $scope.update = function (currentItem) {
            Item.update({id: $scope.Item.code}, currentItem, function (data) {
                $location.path('/');
            });
        };
    })
;