/**
 * Created by jiangjiacai on 2015/8/6.
 */

var mainModel = angular.module('mainModel' , []);
    mainModel.service('Request' , function($q , $http){
        var request = {};
            request.data = {};
        /**
         * 获取热门酒店
         * @param type
         */
            request.getHotCity = function(type){
                $http.get(lyf.go('')).then(function(data){
                    request.data = data;
                    console.log(data);
                },function(data){
                    return $q.reject(data);
                })
            }
        return request;
    })