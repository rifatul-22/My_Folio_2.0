
var darkMode_icone = document.getElementById('mode');
// var side_bars = document.getElementById('sideBars');

darkMode_icone.addEventListener('click',function(){
    document.body.classList.toggle('darkMode');

    if(darkMode_icone.classList.contains('fa-moon')){
        darkMode_icone.classList.add('fa-sun');
        darkMode_icone.classList.remove('fa-moon');
    }else{
        darkMode_icone.classList.remove('fa-sun');
        darkMode_icone.classList.add('fa-moon');
    }
});

// side_bars.addEventListener('click', function(){
//     document.getElementById('sidebar').classList.toggle('active');
// });


$(function(){
    //nav fix
    $(window).on('scroll', function(){
        var navScroll = $(window).scrollTop();

        if(navScroll > 75){
            $('nav').addClass('active');
        }else{
            $('nav').removeClass('active');
        };

        //Back To Top

        if(navScroll > 300){
            $('#backToTop').show(500);
        }else{
            $('#backToTop').hide(500);
        };
    })

    // sideber 
    $('#sideBars').on('click', function(){
        $('#sidebar').toggleClass('active');
    });

    //slider slick
    $('.banner_slider').slick({
        prevArrow: '<i class="fa-solid fa-chevron-left banner_slider_icone"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right banner_slider_icone"></i>',
        autoplay: true,
        dots:true,
        dotsClass:'banner_slider_dots'
    })
    //preloader 
    $(window).on('load', function(){
        $('#preloader').fadeOut(2000);
    });

    $('#backToTop').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        })
    })
})