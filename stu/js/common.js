
//�����С�л�
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

//֪ͨ����

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
   var lineHeight = $self.find("li:first").height(); //��ȡ�и� 
   $self.animate({ "margin-top" : -lineHeight +"px" },600 , function(){
         $self.css({"margin-top":"0px"}).find("li:first").appendTo($self); //appendTo��ֱ���ƶ�Ԫ�ض����Ǹ��ƣ���appendto��Ԫ��λ�÷����仯
   })
}

//֪ͨ�������
/*$(document).ready(function(){
	
	
	$(".gg").YlMarquee({

    	textMode:true,

		vertical:true,

		height:216,

    	step:1

    });
	
});*/

