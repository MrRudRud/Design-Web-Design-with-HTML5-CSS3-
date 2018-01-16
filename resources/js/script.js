$(document).ready(function() {
    var waypoint = new Waypoint({
        element: document.getElementById('js--section-features'),
        handler: function(direction) {
            if(direction == "down"){
                $('nav').addClass('sticky animated fadeInDown');
            } else {
                $('nav').removeClass('sticky');   
            }
        },
        offset: '15%'
    });
    
    // Animation Scroll
    // http://www.web2feel.com/tutorial-for-animated-scroll-loading-effects-with-animate-css-and-jquery/
    $('.js--wp-1').addClass("js--wp-1").viewportChecker({
        classToAdd: 'animated fadeInDown',
        offset: 100
    });

    $('.app-screen').addClass("js--wp-2").viewportChecker({
        classToAdd: 'animated bounceInRight',
        offset: 100
    });
    
    $('.js--wp-3').addClass("js--wp-3").viewportChecker({
        classToAdd: 'animated zoomIn',
        offset: 100
    });    
    
    $('.js--wp-4').addClass("js--wp-4").viewportChecker({
        classToAdd: 'animated pulse',
        offset: 100
    });
    
    
    //Scroll on Buttons
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({scrollTop: $('#js--section-plans').offset().top}, 1000)
    })    
    
    //#js-section-features -->by ID
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('#js--section-features').offset().top}, 1000)
    })
    
    // Select all links with hashes
    // https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });   

});
    
//    var waypoints = $('.js--section-features').waypoint({
//        handler: function(direction) {
//            if(direction == "down"){
//                $('nav').addClass('sticky');
//            } else {
//                $('nav').removeClass('sticky');
//            }
//        },
//        offset: '15%'
//    });
    
//    $('.js--section-features').Waypoint(function(direction){
//        if(direction == "down"){
//            $('nav').addClass('sticky');
//        } else {
//            $('nav').removeClass('sticky');
//        }
//    },{ offset: '15%;' 
//        
//    });
    

//   
//    $('h1').click(function(){
//       $(this).css('background-color', '#ff0000'); 
//    });
//    


//    $(window).scroll(function(){
//        if($(window).scrollTop() <= 1000){
//            $('.btn').addClass('animated bounce');
//            $('.js--wp-1').addClass('animated fadeIn');             
//            $('.js--wp-2').addClass('animated bounceInRight');             
//            $('.js--wp-3').addClass('animated fadeIn');             
//            $('.js--wp-4').addClass('animated fadeIn');            
//        } else {
//            $('.btn').removeClass('animated bounce');
//            $('.js--wp-1').removeClass('animated fadeIn');             
//            $('.js--wp-2').removeClass('animated bounceInRight');             
//            $('.js--wp-3').removeClass('animated fadeIn');             
//            $('.js--wp-4').removeClass('animated fadeIn');   
//        }
//    });    
    
           
