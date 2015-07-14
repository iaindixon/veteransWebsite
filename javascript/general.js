/*jslint browser: true*/
/*global $, jQuery, alert*/
/*Creates the Moving bar when in iPhone mode*/
function toggle() {
    'use strict';
    $('#iconMenu.toggleOn').click(function () {
        $('#dropDown').animate({
            left: '-285px'
        }, 200);
        $('body').animate({
            left: '0px'
        }, 200);
        $('#iconMenu').removeClass('toggleOn').addClass('toggleOff');
    });
}
function main() {
    'use strict';
    $('#iconMenu.toggleOff').click(function () {
        $('#dropDown').animate({
            left: '0px'
        }, 200);
        $('body').animate({
            left: '285px'
        }, 200);
        $('#iconMenu.toggleOff').removeClass('toggleOff').addClass('toggleOn');
        toggle();
    });
}

$(document).ready(main);
