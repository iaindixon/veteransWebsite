/*jslint browser: true*/
/*global $, jQuery, alert*/
/*Creates the Moving bar when in iPhone mode*/
function main() {
    'use strict';
    var timing = 200;
    $('#iconMenu').click(function () {
        if($('#iconMenu').hasClass('visible')) {
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

$(document).ready(main);
