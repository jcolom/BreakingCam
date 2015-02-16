var myApp = angular.module("app.config",[]);
myApp.constant('RESOURCES', (function() {
    // Define your variable
    var resource = 'http://www.planificaciondeportiva.es/bmoll-app';
    var activeApi = '/api/web/v1';
    // Use the variable in your constants
    return {
        USERS_DOMAIN: resource,
        USERS_API: resource + activeApi,
        COUNTRIES: resource + activeApi+ '/countries',
        CATEGORIES: resource + activeApi+ '/categories'
    }
})());

/*
 Definimos soporte de formularios para objetos JSON
 http://cacodaemon.de/index.php?id=44
 */
angular.module('app').config(function ($httpProvider) {
    $httpProvider.defaults.transformRequest = function (data) {
        var str = [];
        for (var p in data) {
            data[p] !== undefined && str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
        }
        return str.join('&');
    };
    $httpProvider.defaults.headers.put['Content-Type'] = $httpProvider.defaults.headers.post['Content-Type'] =
        'application/x-www-form-urlencoded; charset=UTF-8';
});