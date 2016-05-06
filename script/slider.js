$(function(){
    var i=1;

    for(var b=1;b<=$(".fadeslider .slide").length;b++){
        $(".slidelist").append("<div></div>")
    }

    $(".slidelist div:nth-child(1)").addClass("active");

    function slider(){
        var l = $(".fadeslider .slide").length;
        if(i==l){i=0;}
        $(".fadeslider .slide").fadeOut(500);
        $(".slidelist div").removeClass("active");
        i++;
        $(".fadeslider .slide:nth-child("+i+")").fadeIn(500);
        $(".slidelist div:nth-child("+i+")").addClass("active");
        if(i >= l){i = 0;}
    }

    function sliderback(){
        var l = $(".fadeslider .slide").length;
        if(i==0){i=l+1;}
        $(".fadeslider .slide").fadeOut(500);
        $(".slidelist div").removeClass("active");
        i--;
        if(i <= 0){i = l;}
        $(".fadeslider .slide:nth-child("+i+")").fadeIn(500);
        $(".slidelist div:nth-child("+i+")").addClass("active");
    }

    $(".slidenext").click(function(){
        slider();
    });
    $(".slideback").click(function(){
        sliderback();
    });
    var timer = setInterval(slider, 5000);
    $('.slideback,.slidenext').hover(function(ev){
        clearInterval(timer);
    }, function(ev){
        timer = setInterval( slider, 5000);
    });

});


$(document).ready(function() {
    $('.video-lightbox').click(function(){
        $('.video-background, .video-box').animate({'opacity':'.90'}, 500 , 'linear');
        $('.video-box').animate({'opacity':'1.00'}, 500, 'linear');
        $('.video-background, .video-box').css('display','block');
    });
    $('.video-close-lightbox').click(function(){
        $('.video-background,.video-box').animate({'opacity':'0'}, 200 , 'linear', function(){
            $('.video-background, .video-box').css('display', 'none');
        });
    });
    $('.video-background').click(function(){
        $('.video-background,.video-box').animate({'opacity':'0'}, 200 , 'linear', function(){
            $('.video-background, .video-box').css('display', 'none');
        });
    });
});


//Inicia o jQuery
$(function(){
    //chama a função de scroll
    navegation($('#footer'),0);
});

//função para o scroll do menu
function navegation(elemento,desconto){
    elemento.bind('click',function(event){
        var $anchor = $(this);
        var calculo = $($anchor.attr('href')).offset().top;
        if(desconto){
            var goto = calculo-desconto;
        }else{
            var goto = calculo;
        }

        $('html, body').stop().animate({
            scrollTop: goto
        }, 900,'easeInOutExpo');

        event.preventDefault();
    });
}