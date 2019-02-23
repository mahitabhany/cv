// animation on scroll
AOS.init();
// use waypoint Qjuery to load animation on scroll
$(document).ready(function() {
    $('.progress-bar').waypoint(function() {
    $('.progress-bar').css({
    animation: "animate-positive 2s",
    opacity: "1"
    });
    }, { offset: '75%' });

    $(".hovereffect").hover(function(){
        $('.overlay').addClass('triangle')
    });
    $(".hovereffect").mouseleave(function(){
        $('.overlay').removeClass('triangle')
    });
});


$(document).ready(function(){
   


   
});

