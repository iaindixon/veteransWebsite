/*jslint browser: true*/
/*global $, jQuery, alert*/
/*Creates the Moving bar when in iPhone mode*/
function moveDown() {
    'use strict';
    var offset = 75;
    if ($(window).width() < 568) {
        offset = 50;
    }
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - offset
                }, 1000);
                return false;
            }
        }
    });
}
function main() {
    'use strict';
    var timing = 200;
    $('#iconMenu').click(function () {
        if ($('#iconMenu').hasClass('visible')) {
            $('#dropDown').animate({
                left: '-285px'
            }, timing);
            $('body').animate({
                left: '0px'
            }, timing);
        } else {
            $('#dropDown').animate({
                left: '0px'
            }, timing);
            $('body').animate({
                left: '285px'
            }, timing);
        }
        $('#iconMenu').toggleClass('visible');
    });
}
$(document).ready(function () {
    'use strict';
    main();
    moveDown();
});
