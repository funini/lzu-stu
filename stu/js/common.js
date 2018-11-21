
//字体大小切换
$(function(){
$('#fontSmall').click(function(){
            $('#news').css('font-size','14px');
            $('#fontBig').css('color','#999');
            $(this).css('color','#01458E');
        })
        $('#fontBig').click(function(){
            $('#news').css('font-size','18px');
            $('#fontSmall').css('color','#999');
            $(this).css('color','#01458E');
        })
})

//通知公告

/*$(function(){
        var $this = $(".gg");
        var scrollTimer;
        $this.hover(function(){
              clearInterval(scrollTimer);
         },function(){
           scrollTimer = setInterval(function(){
                         scrollNews( $this );
                    }, 2200 );
        }).trigger("mouseout");
});*/
function scrollNews(obj){
   var $self = obj.find("ul:first");
   var lineHeight = $self.find("li:first").height(); //获取行高 
   $self.animate({ "margin-top" : -lineHeight +"px" },600 , function(){
         $self.css({"margin-top":"0px"}).find("li:first").appendTo($self); //appendTo能直接移动元素而不是复制，被appendto的元素位置发生变化
   })
}

//通知公告滚动
/*$(document).ready(function(){
	
	
	$(".gg").YlMarquee({

    	textMode:true,

		vertical:true,

		height:216,

    	step:1

    });
	
});*/

