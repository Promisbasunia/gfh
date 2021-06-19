
$(document).ready (function(){


    $(".js-services").waypoint(function(direction){
        if (direction == down){
            $("nav").addClass("sticky");
        } else{
            $("nav").removeClass("sticky");
        }
    });



    var mixer = mixitup('.containerr');
});









