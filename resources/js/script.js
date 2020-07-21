$(document).ready(function () {
    $('.js--main-section').waypoint(function (direction) {
        if (direction == "down") {
            $('navbar').addClass('sticky');
        } else {
            $('navbar').removeClass('sticky');
        }
    });

});