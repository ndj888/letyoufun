/**
 * Created by jiangjiacai on 2015/8/9.
 */
angular.module('appTravel' , []).controller('TravelListController' , function($scope , $http ){
    $scope.host = 'http://192.168.99.190/letyoufunR010/';
    //$scope.host = conf.common.webHost;
    var server = new ClientServer($http , $scope);
    server.createRequest('index' , 'getHotCity' , 'hotCity');
    server.createRequest('travel' , 'getTravel/class/3' , 'zhoubian');
    server.createRequest('travel' , 'getTravel/class/1' , 'jingnei');
    server.createRequest('travel' , 'getTravel/class/2' , 'jingwai');
})