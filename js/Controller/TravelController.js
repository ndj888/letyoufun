/**
 * Created by jiangjiacai on 2015/7/26.
 */


angular.module('appTravel', ['mainModel']).controller('TravelController', function ($scope, $http, Request) {
    Request.getHotCity($http, $scope);
    Request.getTravel($http, $scope, 3);
    Request.getTravel($http, $scope, 1);
    Request.getTravel($http, $scope, 2);
})