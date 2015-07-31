/**
 * Created by jiangjiacai on 2015/7/26.
 */
angular.module('appFlight' , ['flightModel']).controller('FlightController' , function($scope , $http , Request){

    var time = new Date();
    var timestamp=new Date().getTime();
    $scope.today = time.format('yyyy/MM/dd');
    $('#demo').attr('time' , timestamp);

    /**
     * 搜索
     */
    $scope.searchFlight = function(){
        var data = {};
        data.dCityName = $('.dCityName').html();
        data.aCityName = $('.aCityName').html();
        data.time = $('#demo').attr('time');
        Request.setRequet($scope , $http ,data);
    }
})