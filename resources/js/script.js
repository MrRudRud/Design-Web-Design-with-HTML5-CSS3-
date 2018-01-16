$(document).ready(function() {
    var waypoint = new Waypoint({
        element: document.getElementById('js--section-features'),
        handler: function(direction) {
            if(direction == "down"){
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        },
        offset: '10%'
    });
    

    //Scroll on Buttons
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({scrollTop: $('#js--section-plans').offset().top}, 1000)
    })    
    
    //#js-section-features -->by ID
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('#js--section-features').offset().top}, 1000)
    })

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
