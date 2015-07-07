/*jslint browser: true*/
/*global $, jQuery, alert*/
function resizeIframe(obj) {
    "use strict";
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

window.onload = function () {
    'use strict';
    $('#computer.row > a').click(function () {
        $('#myIframe').css('height', '800px');
        if ($(this).attr('href').substr(5) === 'events.html') {
            window.console.log('Events');
        } else if ($(this).attr('href').substr(5) === 'home.html') {
            window.console.log('Home');
        } else if ($(this).attr('href').substr(5) === 'info.html') {
            window.console.log('Info');
        } else if ($(this).attr('href').substr(5) === 'contact.html') {
            window.console.log('Contact');
        } else {
            window.console.log('The page you have clicked on has not loaded.');
        }
        var source = $(this).attr('href').substr(5),
            height = 0;
        $.get('../html/' + source, function (i) {
            var j = i;
            window.console.log($(j).height());
        });
    });
};