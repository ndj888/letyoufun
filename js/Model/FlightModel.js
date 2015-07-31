/**
 * Created by jiangjiacai on 2015/7/26.
 */

var flightMode = angular.module('flightModel' , []);
    flightMode.service('Request' , function(){
        var request = {};
            request.setRequet = function($scope , $http , data){
                var requestArr = {};
                $http({'method': 'get', 'url': lyf.go('AppServer/Flight/getSearch/c' , data.dCityName+'-'+data.aCityName+'-'+parseInt(data.time/1000))}).success(function (data) {
                    window.location.href = './plane_cw.html?'+'dCity='+data.dCityCode+'&aCity='+data.aCityCode+'&date='+data.departDate;
                });
            }

            request.getFlight = function($scope , $http , data){
                $http.post(lyf.go('AppServer/Flight/getFlightList') , data).success(function(data){
                    $scope.flightList = data;
                })
            }
            request.getLowPrice = function($scope , $http , data){
                $http.post(lyf.go('AppServer/Flight/getLowPrice') , data).success(function(data){
                    $scope.flightLowPrice = data;
                })
            }
        return request;
    })