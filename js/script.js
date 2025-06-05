function visualSlider(){
    $(".visualSlider .slider").animate({left:"-1920px"},5000,function(){
        $(".visualSlider .slider").append($(".visualSlider .slider li").first())
        $('.visualSlider .slider').css({left:0})
    })
}

setInterval(visualSlider,2000)

function top_popup(){
    $(".top_popup .popupslide").animate({top:"-37px"},5000,function(){
        $(".top_popup .popupslide").append($(".top_popup .popupslide li").first())
        $(".top_popup .popupslide").css({top:0})
    })
}

setInterval(top_popup,2000)


// content6



  var swiper = new Swiper(".slide-warpper-promo", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
