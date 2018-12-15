/*jslint browser: true*/
/*eslint-env browser*/
/*jslint node: true */
/*jshint esnext: true, expr: true, unused: false */
/*jshint validthis: true */
/*global $*/

var page = $('.page');


// INIT

$(document).ready(function () {


    // WIDOW FIX
    $('.page_title, h1, h3, p').widowFix();

    page.click(function () {
        var $this = $(this),
            number = $this.data('number');

        page.removeClass('is-active');
        $this.addClass('is-active');

        page.not($this).animate({ // animate your right div
            scrollTop: 0 // to the position of the target 
        }, 500);


        page.each(function (i) {

            if (i < number) {
                $(this).addClass('is-slided');
            } else {
                $(this).removeClass('is-slided');
                console.log('nient');
            }
        })


    })
})
