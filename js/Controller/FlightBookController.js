/**
 * Created by jiangjiacai on 2015/7/26.
 */
angular.module('appFlight' , ['flightModel']).controller('FlightBookController' , function($scope , $http , Request , $location){
    var data = lyf.getUrlPram();
    Request.getLowPrice($scope , $http , data);

    $scope.makeOrder = function(price){
        window.location.href = './pay.html?price='+price;
    }
})