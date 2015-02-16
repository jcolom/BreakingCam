angular.module('starter.categories', [])

.factory('Category', function (RESOURCES, $resource) {
    return $resource(RESOURCES.CATEGORIES + "/:id", null, {
            query: {method: 'GET', isArray: true},
            get: {method: 'GET'},
            add: {method: 'POST'},
            delete: {method: 'DELETE'},
            update: {method: 'PUT'}
        });
})

.factory('Item', function (RESOURCES, $resource) {
    console.log("factory item");
    return $resource(RESOURCES.ITEMS + "/:id", null, {
            query: {method: 'GET', isArray: true},
            get: {method: 'GET'},
            add: {method: 'POST'},
            delete: {method: 'DELETE'},
            update: {method: 'PUT'}
        });
})

.factory('Images', function (RESOURCES, $resource) {
    console.log("factory images");
    return $resource(RESOURCES.IMAGENES + "/:id", null, {
            query: {method: 'GET', isArray: true},
            get: {method: 'GET'},
            add: {method: 'POST'},
            delete: {method: 'DELETE'},
            update: {method: 'PUT'}
        });
})

.factory('Camera', ['$q', function($q) {
  return {
    getPicture: function(options) {
      var q = $q.defer();
      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);
      return q.promise;
    }
  }
}])
/*
.factory('Upload', function($q, $cordovaCamera, $cordovaFile, Constants) {
 
    return {
 
        fileTo: function(serverURL) {
 
            var deferred = $q.defer();
 
            if (ionic.Platform.isWebView()) {
 
                var options =   {
                    quality: 100
                    , destinationType: Camera.DestinationType.FILE_URI
                    , sourceType: Camera.PictureSourceType.PHOTOLIBRARY
                    , encodingType: Camera.EncodingType.JPEG
                }
 
                $cordovaCamera.getPicture(options).then(
 
                    function(fileURL) {
 
                        var uploadOptions = new FileUploadOptions();
                        uploadOptions.fileKey = "file";
                        uploadOptions.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
                        uploadOptions.mimeType = "image/jpeg";
                        uploadOptions.chunkedMode = false;
 
                        $cordovaFile.uploadFile(serverURL, fileURL, uploadOptions).then(
 
                            function(result) {
                                deferred.resolve(result);
                            }, function(err) {
                                deferred.reject(err);
                            })
 
                        ;
 
                    }, function(err){
                        deferred.reject(err);
                    })
 
                ;
 
            }
            else {
                deferred.reject('Uploading not supported in browser');
            }
 
            return deferred.promise;
 
        }
 
    }
 
})
*/
;