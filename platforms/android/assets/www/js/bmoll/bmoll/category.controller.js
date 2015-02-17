'use strict';

angular.module('app')
    .controller('CategoryListCtrl', function ($scope, Category) {
        Category.query(function (data) {
            $scope.categories = data;
        });
    });
