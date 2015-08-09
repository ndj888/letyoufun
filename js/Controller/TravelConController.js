/**
 * Created by jiangjiacai on 2015/8/9.
 */


angular.module('appTravel' , []).controller('TravelConController' , function($scope , $http ){
    var param = lyf.getUrlPram();
    var server = new ClientServer($http , $scope);
    var funName = param.type == 'hotelCon' ? 'getHotelDetal' : 'getTravelDetal';
        server.createRequest(param.apiName , funName+'/id/'+param.id , param.templateName);
})