var app = angular.module('app');
app.factory("Country", function (RESOURCES, $resource) {
    //return $resource("http://www.planificaciondeportiva.es/bmoll-app/api/web/v1/countries/:id");
    return $resource(RESOURCES.COUNTRIES + "/:id", null,
        {
            query: {method: 'GET', isArray: true},
            get: {method: 'GET'},
            add: {method: 'POST'},
            delete: {method: 'DELETE'},
            update: {method: 'PUT'} /*,params:{id:'@code'}*/
        });
});

