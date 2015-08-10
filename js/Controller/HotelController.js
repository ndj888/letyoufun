/**
 * Created by jiangjiacai on 2015/8/10.
 */


var appHotel = angular.module('appHotel' , []).controller('HotelController' , function($scope , $http ){
    $scope.host = 'http://192.168.99.190/letyoufunR010/';
    //$scope.host = conf.common.webHost;
    var server = new ClientServer($http , $scope);
    var time = new Date();
    var start =time.format('yyyy-MM-dd' , 1);
    var end = time.format('yyyy-MM-dd' , 2);

    server.createRequest('index' , 'getHotCity' , 'hotCity');
    server.createRequest('index' , 'getHotelList?hotel_start='+start+'&hotel_end='+end , 'hotelLists');

    /**
     * 换页
     * @param num +-1
     */
    $scope.changePage = function(num){
        var startPage = parseInt($scope.hotelLists.page);
        var endPage = parseInt($scope.hotelLists.totalpage);
        var nowPage = parseInt(startPage+num);
            nowPage = nowPage == 0 ? 1 : nowPage;
        if( nowPage <= endPage && nowPage > 0){
            server.createRequest('index' , 'getHotelList?hotel_start='+start+'&hotel_end='+end+'&page='+nowPage, 'hotelLists');
        }
    }

    $scope.searchCity = function(cityName){
        server.createRequest('index' , 'getHotelList?mudi='+cityName+'&hotel_start='+start+'&hotel_end='+end).then(function(d){
            $scope.hotelLists = d;
            $scope.isData = d.list[0] ? "true" : "false"; //是否有数据
        })

    }

})
