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

/*
.controller('CameraCtrl', function($scope, Camera) {        
    var options =   {
        quality: 75,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
        encodingType: 0     // 0=JPG 1=PNG
    }
    $scope.takePicture = function() {
    	console.log("Getting camera");
        navigator.camera.getPicture(onSuccess,onFail,options);
    }
    var onSuccess = function(FILE_URI) {
        console.log(FILE_URI);
        $scope.picData = FILE_URI;
        $scope.$apply();
    }
    var onFail = function(e) {
        console.log("On fail " + e);
    }
    $scope.send = function() {   
        var myImg = $scope.picData;
        var options = new FileUploadOptions();
        options.fileKey="post";
        options.chunkedMode = false;
        var params = {};
        params.user_token = localStorage.getItem('auth_token');
        params.user_email = localStorage.getItem('email');
        options.params = params;
        var ft = new FileTransfer();
        ft.upload(myImg, encodeURI("https://example.com/posts/"), onUploadSuccess, onUploadFail, options);
    }
    $cordovaCamera.getPicture(options).then(

		function(fileURL) {

			var uploadOptions = new FileUploadOptions();
			uploadOptions.fileKey = "file";
			uploadOptions.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
			uploadOptions.mimeType = "image/jpeg";
			uploadOptions.chunkedMode = false;

			$cordovaFile.uploadFile("http://www.planificaciondeportiva.es/bmoll-app/api/web/v1/", fileURL, uploadOptions).then(
				function(result) {
					// Success!
				}, function(err) {
					// Error
				})
			;

		})
})
*/
/*
.controller('CameraCtrl', function($scope, Camera) {
    var pictureSource=navigator.camera.PictureSourceType; // Origen de la imagen
    var destinationType=navigator.camera.DestinationType; // Formato del valor retornado
    }

    // Llamada cuando la foto se retorna sin problemas
    function onPhotoDataSuccess(imageData) {
      // Descomenta esta linea para ver la imagen codificada en base64
      // console.log(imageData);
  
      // Obtiene el elemento HTML de la imagen
      var smallImage = document.getElementById('smallImage');
  
      // Revela el elemento de la imagen
      smallImage.style.display = 'block';
  
      // Muestra la foto capturada
      // Se usan reglas CSS para dimensionar la imagen
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Llamada cuando la foto se retorna sin problemas
    function onPhotoURISuccess(imageURI) {
      // Descomenta esta linea para ver la ruta URI al fichero de imagen 
      // console.log(imageURI);
  
      // Obtiene el elemento HTML de la imagen
      var largeImage = document.getElementById('largeImage');
  
      // Revela el elemento de la imagen
      largeImage.style.display = 'block';
  
      // Muestra la foto capturada
      // Se usan reglas CSS para dimensionar la imagen
      largeImage.src = imageURI;
    }

    // Un botÃ³n llamara a esta funciÃ³n
    function capturePhoto() {
      // Toma la imagen y la retorna como una string codificada en base64
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
    }

    // Un botÃ³n llamara a esta funciÃ³n
    function getPhoto(source) {
      // Retorna la ruta del fichero de imagen desde el origen especificado
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Llamado cuando algo malo ocurre
    function onFail(message) {
      alert('OcurriÃ³ un error: ' + message);
    }
})
*/
/*
.controller('UploadCtrl', function($scope, Upload){
 
	$scope.uploadFile = function() {
 
		Upload.fileTo("http://www.planificaciondeportiva.es/bmoll-app/api/web/v1/").then(
			function(res) {
				// Success
			}, function(err) {
				// Error
			})
		;
 
	};
 
});
*/

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