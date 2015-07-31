/**
 * Created by jiangjiacai on 2015/7/26.
 */


var mainMode = angular.module('mainModel' , []);
    mainMode.service('Request' , function(){
        var request = {};
        /**
         * 获取热门城市
         * @param $http
         * @param $scope
         */
            request.getHotCity = function($http , $scope){
                $http({'method': 'get', 'url': lyf.go('AppServer/Index/getHotCity')}).success(function (data) {
                    $scope.hotCity = data.hotCity;
                });
            }

        /**
         * 获取旅游线路
         * @param $http
         * @param $scope
         * @param id
         */
            request.getTravel = function($http , $scope , id){
                $http({'method': 'get', 'url': lyf.go('AppServer/Index/getTravel' , 'class/'+id)}).success(function (data) {
                    var list = data.lists;
                    for( var i = 0; i < list.length; i ++ ){
                        list[i].fenqi = lyf.fenqi(list[i].today_price);
                    }
                    switch (id){
                        case 1:
                            $scope.jingnei = list;
                            break;
                        case 2:
                            $scope.jingwai = list;
                            break;
                        case 3:
                            $scope.zhoubian = list;
                            break;
                    }
                });
            }
        return request;

    })