angular.module('starter.camera', [])

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
;