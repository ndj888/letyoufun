$.swarp = function(obj){
	var wi=$("body").width();
    var h=$(".imgwarp > div").height();
	$(window).resize(function(){
		 wi=$("body").width();
		 h=$(".imgwarp > div").height();
		 wrap(obj,wi,h)
	});
	wrap(obj,wi,h);
	function wrap(obj,wi,h){
    if(wi>640)
		wi=640;
    h=$(".imgwarp > div").height();
    var index=0;
    var size=$(obj).find(".imgwarp > div").size();
	$(".imgwarp").css("width",wi*4+"px");
	console.log($(".imgwarp").width());
	$(".imgshow").css("height",h+"px");
	$(obj).find($(".imgwarp")).swipeLeft(function(){
		if(index<size-1){
			index++;
		}
		$(this).animate({
			left: -wi*index},
			300);
		$(obj).find($(".picbtn li")).eq(index).addClass("cur").siblings().removeClass("cur");
	});
	$(obj).find($(".imgwarp")).swipeRight(function(){
		if(index>0){
			index--;
		}
		$(this).animate({
			left: -wi*index},
			300);
		$(obj).find($(".picbtn li")).eq(index).addClass("cur").siblings().removeClass("cur");
	});
	}
	
	};
	$.deswarp = function(obj){
	var wi=$("body").width();
	$(window).resize(function(){
		 wi=$("body").width();
		  wrap(obj,wi);
	});
	 wrap(obj,wi);
	function wrap(obj,wi){
	if(wi>640)
		wi=640;
    var index=0;
	$(".deswrap").css("width",wi*3+"px");
	$(obj).find($(".deswrap")).swipeLeft(function(){
		if(index<2){
			index++;
		}
		$(this).animate({
			left: -wi*index},
			300);
		$(obj).find($(".desbtn li")).eq(index).addClass("cur").siblings().removeClass("cur");
	});
	$(obj).find($(".deswrap")).swipeRight(function(){
		if(index>0){
			index--;
		}
		$(this).animate({
			left: -wi*index},
			300);
		$(obj).find($(".desbtn li")).eq(index).addClass("cur").siblings().removeClass("cur");
	});
    }
	};
	//tab切换
$.jqtab = function(obj){
   var len=$(obj).length;
    $(obj).click(function(){
      for(var i=0;i<len;i++){
        if($(this).hasClass("active")){
          $(this).removeClass("active");
        }else{
          $(this).addClass("active").siblings().removeClass("active");
        }
      }
    });
	}

$.tap=function(obj){
	$(obj).tap(function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
	
}	
$.clicktap=function(obj){
	$(obj).click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
	
}	