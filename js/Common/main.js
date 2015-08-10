/**
 * Created by jiangjiacai on 2015/7/25.
 */

var lyf = {};


/**
 * ajax获取一个节点并插入DOM
 * @param url
 * @param nodeName
 */
    lyf.getDataInDom = function(url , nodeName){
        $.get(url , function(data){
            if ( !!$(nodeName)){
                $(nodeName).prepend(data);
            }
        })
    }


/**
 * 跳转URL
 * @param name 控制器方法名
 * @param param 参数
 * @param way 方法 ，默认返回地址 ， 为 true时跳转
 */
    lyf.go = function(name , param , way){
        var href = '';
        href =  !param  ? conf.common.webHost + name : conf.common.webHost + name + '/'+param;
        if ( way == true){
            window.loaction.href = href;
        }else{
            return href;
        }
    }

/**
 * 获取一个模板对象
 * @param name
 * @returns {*|jQuery|HTMLElement}
 */
    lyf.getTemplate = function(name){
        $(name).addClass('template');
        $(name).hide();
        return $(name);
    }

/**
 * 自动分期付款显示
 * @param price
 */
    lyf.fenqi = function(price){
        var p = parseFloat(price);
        var data = {};
        var num = 1;
        if( p > 500 && p < 3000 ){
        //    分3期
            num = 3;
        }else if( p > 3000 && p < 6000 ){
            num = 6
        }else{
            num = 12;
        }
        data.price = (p/num).toFixed(2);
        data.num = num;
        return data;
    }

/**
 * 拓展JS日期，增加格式化日期
 * @param format
 * @param num
 * @returns {*}
 */
Date.prototype.format = function(format , num){
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(), //day
        "h+" : this.getHours(), //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter
        "S" : this.getMilliseconds() //millisecond
    }
    if(num){
        o['d+'] += num;
    }
    if(/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }

    for(var k in o) {
        if(new RegExp("("+ k +")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
}


/**
 * 获取url参数
 * @param name
 * @returns {Object}
 */
lyf.getUrlPram = function(name){
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
