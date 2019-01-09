/*jslint browser: true*/
/*eslint-env browser*/
/*jslint node: true */
/*jshint esnext: true, expr: true, unused: false */
/*jshint validthis: true */
/*global $*/

var page = $('.page'),
    loader = $('.loader');




// INIT

$(document).ready(function () {

    loader.addClass('is-loaded');

    // WIDOW FIX
    $('.title, h1, h3, p').widowFix();

    page.click(function (evt) {

        if (evt.target.matches('span')) {
            asterisk();
            return;
        }

        if (!$(this).closest('.page').hasClass('is-active')) {


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
                }
            })

        }
    })

    roulette();

})



function asterisk() {
    // OPEN END PAGE
    page.removeClass('is-active');
    var number = 6;

    page.each(function (i) {

        if (i < number) {
            $(this).addClass('is-slided');
        }
    })

    $('.is-end').addClass('is-active');
}


function roulette() {

    var option = {
        speed: 20,
        duration: 0.1,
        startCallback: function () {

            $('.page_roulette_share').addClass('is-disabled');

        },
        slowDownCallback: function () {},
        stopCallback: function ($stopElm) {
            var ID = $stopElm.data('number');
            console.log(ID);

            $('.page_roulette_share').removeClass('is-disabled');
        }
    }

    var rouletter = $('.page_roulette_img')
    rouletter.roulette(option);


    $('.start').click(function () {
        rouletter.roulette('start');
    });
}
