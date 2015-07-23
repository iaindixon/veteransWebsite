/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
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
});