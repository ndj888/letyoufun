/**
 * Created by jiangjiacai on 2015/8/6.
 */

angular.module('appIndex' , []).controller('IndexController' , function($scope , $http ){
    $scope.host = 'http://192.168.99.190/letyoufunR010/';
    var server = new ClientServer($http , $scope);
        server.createRequest('index' , 'getHotCity' , 'hotCity');
        server.createRequest('index' , 'getTravel' , 'travelList');
        server.createRequest('index' , 'getHotHotel' , 'hotHotel');
})