/**
 * Created by jiangjiacai on 2015/7/26.
 */
angular.module('appPay' , []).controller('PayViewController' , function($scope){
        $scope.price =  lyf.getUrlPram().price;
})