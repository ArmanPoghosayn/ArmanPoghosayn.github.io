
$(document).ready(function() { 
	var Bill = true;
     $('html,body').animate({
         scrollTop: $(".all").offset().top
     },'slow');
$('.fa-hand-pointer').hide();
$('.wikipedia').hide();
$('.c_sharp').hide();
$('.area_2').css({'transform':'translate(-200px)'});
$('.develop').css({'transform':'translate(-200px)'});
$('.design').css({'transform':'translate(-200px)'});
$('.strat').css({'transform':'translate(-200px)'});
 $(function() {      
        $("#slideshow > div:gt(0)").hide();	
            setInterval(function() { 
              $('#slideshow > div:first')
                .hide()
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow');
            }, 7000);       
              
        });
 $('.pre_v').click(function(){ 
 	 $(function() {  	 
 	 	setTimeout(function() { 
              $('#slideshow > div:first')
                .hide()
                .prev()
                .fadeIn(200)
                .end()
                .appendTo('#slideshow'); 
                $('.title1').css({'top':'0px'});
        		$('.text1').css({'top':'0px'});
                $('.title1').animate({top:'300px'},1000);
                $('.text1').animate({top:'380px'},600);
                $('.title2').css({'left':'0px','font-size':'30px'});
        		$('.text2').css({'left':'0px','font-size':'5px'});
                $('.title2').animate({left:'280px',fontSize:'70px'},1000);
                $('.text2').animate({left:'360px',fontSize:'18px'},600); 
                $('.title3').css({'top':'0px'});
        		$('.text3').css({'font-size':'3px'});
                $('.title3').animate({top:'300px'},1000);
                $('.text3').animate({fontSize:'18px'},1100); 
                },800);
        });        
 })
   
 $(".fa-hand-pointer").click(function() {
    $('html,body').animate({
        scrollTop: $("#slideshow").offset().top},
        'slow');
    });
 $('.button_more').mouseover(function(){
    $('.fa-chevron-right').css({'color':'#fff','transition':'0.8s'})
    $('.button_more').css({'background-color':'#e7272d','color':'#fff','transition':'0.8s'})
 })
  $('.button_more').mouseout(function(){
    $('.fa-chevron-right').css({'color':'red','transition':'0.8s'})
    $('.button_more').css({'background-color':'transparent','color':'red','transition':'0.8s'})
 })


$(window).on('scroll',function(){
   var top = $(window).scrollTop();
    if (top > 50 && Bill == true) {
        $('.fa-hand-pointer').fadeIn(500);
        $('.area_2').css({'transform':'translate(0px)','transition':'1.3s'});
    }else{
        $('.fa-hand-pointer').fadeOut(500);
    }
    if (top > 1200) {
        $('.strat').css({'transform':'translate(0px)','transition':'1.3s'});
        setTimeout(function(){
            $('.design').css({'transform':'translate(0px)','transition':'1.3s'});
        },500)
        setTimeout(function(){
            $('.develop').css({'transform':'translate(0px)','transition':'1.3s'});
        },1000)
    }else{
        $('.strat').css({'transform':'translate(-200px)','transition':'1.3s'});
        setTimeout(function(){
            $('.design').css({'transform':'translate(-200px)','transition':'1.3s'});
        },500)
        setTimeout(function(){
            $('.develop').css({'transform':'translate(-200px)','transition':'1.3s'});
        },1000)
    }

	if ($(window).scrollTop()) {
		$('#menu').addClass('black');
        $('#menu').removeClass('none');
	}else{
        $('#menu').removeClass('black');
		$('#menu').addClass('none');
	}
    var scroll = $(window).scrollTop();
    if (scroll > 500 && scroll < 1200) {
        $('#about').addClass('red');
        $('#about2').addClass('red');
    }else{
        $('#about').removeClass('red');
        $('#about2').removeClass('red');
    }
    if (scroll > 1200 && scroll < 2500) {
        $('#strategy').addClass('red');
        $('#strategy2').addClass('red');
    }else{
        $('#strategy').removeClass('red');
        $('#strategy2').removeClass('red');
    }
})
})
$("#about").click(function() {
    $('html,body').animate({
        scrollTop: $("#area_1").offset().top
    },'slow');
});
$("#about2").click(function() {
    $('html,body').animate({
        scrollTop: $("#area_1").offset().top
    },'slow');
});
$("#strategy").click(function() {
    $('html,body').animate({
        scrollTop: $(".area3").offset().top
    },'slow');
});
$("#strategy2").click(function() {
    $('html,body').animate({
        scrollTop: $(".area3").offset().top
    },'slow');
});
var rot = false;

$(".fa-arrow-down").click(function(){
    if (rot === false) {
        $(".fa-arrow-down").css({
            "transform":"rotate(" + 0 + "deg)",
            "transition":"0.5s"
        })
        $(".twoMenu").fadeIn();
        $(".menuText").css({
            "display":"block"
        })
        rot = true;
        return;
    }
    if (rot === true) {
            $(".fa-arrow-down").css({
                "transform":"rotate(" + 180 + "deg)"
            })
            $(".twoMenu").fadeOut();
            rot = false;
            return;
    }
    })
    $(window).resize(function(){
        if ($(window).width() > 1000) {
            $(".twoMenu").css({
                "display":"none"
            });
            $(".fa-arrow-down").css({
                "transform":"rotate(" + 180 + "deg)"
            })
            rot = false;
        }
        if ($(window).width() < 1000 && Bill == true) {
            $('.area_2').fadeIn(800);
            $('.area_2').css({'transform':'translate(0px)','transition':'1.3s'}); 
        }
    })
    $(document).ready(function(){
        if ($(window).width() < 1000 && Bill == true) {
            $('.area_2').fadeIn(800);
            $('.area_2').css({'transform':'translate(0px)','transition':'1.3s'}); 
        } 
    })
$(".button_more").click(function(){
	Bill = false;
    $('.area_2').css({'transform':'translate(-1500px)','transition':'1.3s'});
    $('.area_2').fadeOut();
    setTimeout(function(){
        $('.wikipedia').css({'transform':'translate(0px)'})
        $('.wikipedia').fadeIn(1000);
    },400)
    setTimeout(function(){
        $('html,body').animate({
            scrollTop: $(".wikipedia").offset().top
        },'slow');
    },1000)
})
$(".button_back").click(function(){
	Bill == true;
    $('.wikipedia').css({'transform':'translate(-1500px)','transition':'1.3s'});
    $('.wikipedia').fadeOut();
    setTimeout(function(){
        $('.area_2').css({'transform':'translate(0px)'})
        $('.area_2').fadeIn(1000);
    },400)
    setTimeout(function(){
        $('html,body').animate({
            scrollTop: $(".area_2").offset().top
        },'slow');
    },1000)
})




