var swiper = new Swiper('.swiper-container', {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
    });

//ham cho san pham chay ngang
$('.multi-item-carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    } else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });
//fixed navbar
$(window).scroll(function() { 
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $("#menuthu2").addClass("header");
    } else {
        $("#menuthu2").removeClass("header");
    } if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 400) { $('.backbutton').show(1000)}
        else{ $('.backbutton').hide(1000)}
});





