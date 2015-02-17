var app = angular.module('app');
app.factory("Category", function(RESOURCES,$resource) {
    return $resource(RESOURCES.CATEGORIES+"/:id");
});