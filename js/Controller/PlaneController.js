/**
 * Created by jiangjiacai on 2015/8/9.
 */


angular.module('appPlane' , []).controller('PlaneController' , function($scope , $http ){
    $scope.host = 'http://192.168.99.190/letyoufunR010/';
    var time = new Date();
    var timestamp=new Date().getTime();
    $scope.today = time.format('yyyy/MM/dd');
    $('#time').val(timestamp);
    //$scope.host = conf.common.webHost;
    var server = new ClientServer($http , $scope);
    //server.createRequest('index' , 'getHotCity' , 'hotCity');

    $scope.searchFlight = function(){
        var data = {};
        data.dCityName = $('.dCityName').html();
        data.aCityName = $('.aCityName').html();
        data.time = $('#demo').attr('time');
        server.createRequest('flight' , 'getSearch/c/'+data.dCityName+'-'+data.aCityName+'-'+parseInt(data.time/1000)).then(function(d){

        })
    }
})