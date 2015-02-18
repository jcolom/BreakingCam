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
;