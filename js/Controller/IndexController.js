/**
 * Created by jiangjiacai on 2015/7/25.
 */


angular.module('appIndex', []).controller('IndexController', function ($scope, $http) {
    //周边游
    $http({'method': 'get', 'url': lyf.go('AppServer/Index/getTravel', 'class/3')}).success(function (data) {
        var list = data.lists;
        for( var i = 0; i < list.length; i ++ ){
            list[i].fenqi = lyf.fenqi(list[i].today_price);
        }
        $scope.travelList = list;
    });

    $http({'method': 'get', 'url': lyf.go('AppServer/Index/getTravel', 'class/2')}).success(function (data) {
        //境外游
        var list = data.lists;
        for( var i = 0; i < list.length; i ++ ){
            list[i].fenqi = lyf.fenqi(list[i].today_price);
        }
        $scope.jingwai = list;
    });

    $http({'method': 'get', 'url': lyf.go('AppServer/Index/getTravel', 'class/1')}).success(function (data) {
       //境内游
        var list = data.lists;
        for( var i = 0; i < list.length; i ++ ){
            list[i].fenqi = lyf.fenqi(list[i].today_price);
        }
        $scope.jingnei = list;
    });

    $http({'method': 'get', 'url': lyf.go('AppServer/Index/getHotHotel')}).success(function (data) {
        //热门酒店
        $scope.hotHotel = data;
    });

    $http({'method': 'get', 'url': lyf.go('AppServer/Index/getHotCity')}).success(function (data) {
        //热门城市
        $scope.hotCity = data.hotCity;
    });

})
