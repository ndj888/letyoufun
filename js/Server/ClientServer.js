/**
 * Created by jiangjiacai on 2015/8/6.
 */


/**
 * 本地服务
 */
function ClientServer($http , $scope){
    this.init($http , $scope);
}

/**
 * 创建一个对API的ajax请求
 * @param apiName
 * @param getParam
 * @param templateName
 * @param postData
 * @returns void || object
 */
ClientServer.prototype.createRequest = function(apiName , getParam , templateName , postData ){
    apiName = arguments[0] ? apiName : 'index';
    getParam = arguments[1] ? getParam : '';
    templateName = arguments[2] ? templateName : '';
    postData = arguments[3] ? postData : '';
    var scope = this.scope;
        scope['isok'] = false;
    if( !postData ){
        this.data =  (
            this.http.get(lyf.go(this.api[apiName] , getParam)).then(function(response){
                return response.data;
        }));
    }else{
        //post
        this.data =  (
        this.http.post(lyf.go(this.api[apiName] , getParam) , postData).then(function(response){
            return response.data;
        }));
    }

    if( templateName == ''){
        return this.data;
    }
    this.data.then(function(d){
        scope['isok'] = true;
        scope[templateName] = d;
    })
}

/**
 * 初始化一些常用函数或常量
 */
ClientServer.prototype.init = function($http , $scope){
    this.http = $http;
    var api = new Array();
    api['index'] = 'AppServer/Index'
    api['flight'] = 'AppServer/Flight';
    api['travel'] = 'AppServer/Travel';
    api['flight'] = 'AppServer/Flight';

    this.api = api;
    this.data = {};
    this.scope = $scope;
    /**
     * 跳转到详情页面
     * @param type
     * @param id
     * @param templateName
     * @param apiName
     */
    $scope.goToDetal = function(apiName , id , templateName , type){
        type = arguments[3] ? arguments[3] : 'travelCon';
        window.location.href = './'+type+'.html?apiName='+apiName+'&id='+id+'&templateName='+templateName+'&type='+type;
    }
}






