// JavaScript Document

$(function(){
	/*导航*/
	$('.menu').mouseenter(function(e) {
        $(this).children('.sub_nav').stop().slideDown();
    }).mouseleave(function(e) {
        $(this).children('.sub_nav').stop().slideUp();
    });	
	/*banner*/
	var timer = null;
		var thisIndex = 0;//轮播图的灵魂所在，就是要控制这个索引值。
		function changeImg(){
			$('.banner ol li').eq(thisIndex).addClass('current').siblings().removeClass('current');
			$('.banner ul li').eq(thisIndex).hide().stop().fadeIn().siblings().hide();
		}
		function fnTimer(){
			thisIndex++;
			if(thisIndex > 5){
				thisIndex = 0;
			}
			changeImg();
		};
		timer = setInterval(fnTimer,1000);//自动轮播
		$('.banner ol li').mouseover(function(e) {
            $(this).addClass('current').siblings().removeClass('current');
			thisIndex = $(this).index();
			$('.banner ul li').eq(thisIndex).hide().stop().fadeIn().siblings().hide();
        });
		
		$('.banner').hover(function(){
			$('#leftBtn,#rightBtn').show();
            clearInterval(timer);
		},function(){
			$('#leftBtn,#rightBtn').hide();
			clearInterval(timer);
			timer = setInterval(fnTimer,1000);
		})
		$('#rightBtn').click(function(e) {
            thisIndex++;
			if(thisIndex > 5){
				thisIndex = 0;
			}
			changeImg();
        });
		
		$('#leftBtn').click(function(e) {
            thisIndex--;
			if(thisIndex < 0){
				thisIndex = 5;
			}
			changeImg();
        });
		
		/*section3*/
		$('.list1 li').mouseover(function(e) {
            $(this).children('p').stop().animate({bottom:'-38px'},200);
			$(this).children('div').show();
        }).mouseout(function(e) {
            $(this).children('p').stop().animate({bottom:'0'},200);
			$(this).children('div').hide();
        });
        $('.weixin').mouseover(function(e) {
        	$('.k').show();
        	$('.kk').show();
        })
        $('.weixin').mouseout(function(e) {
        	$('.k').hide();
        	$('.kk').hide();
        })

})
/*
lastScrollY=0;
function gotop(){
	var diffY;
	if (document.documentElement && document.documentElement.scrollTop)
		diffY = document.documentElement.scrollTop;
	else if (document.body)
		diffY = document.body.scrollTop
	else
		{}
	percent=.1*(diffY-lastScrollY);
	if(percent>0)percent=Math.ceil(percent);
	else percent=Math.floor(percent);
	//document.getElementById("gotop").style.top=parseInt(document.getElementById("gotop").style.top)+percent+"px";
	lastScrollY=lastScrollY+percent;
	if(lastScrollY<500){
	document.getElementById("gotop").style.display="none";
	} else {
	document.getElementById("gotop").style.display="block";
	}
}
gotopcode="<a id=\"gotop\" class=\"gotop\" href=\"#\" title=\"返回顶部\" onfocus=\"this.blur()\" onclick=\"window.scrollTo(0,0);\"></a>"
document.write(gotopcode);
window.setInterval("gotop()",1);
*/