/*jslint browser: true*/
/*eslint-env browser*/
/*jslint node: true */
/*jshint esnext: true, expr: true, unused: false */
/*jshint validthis: true */
/*global $*/

var main = $('main'),
    page = $('.page'),
    loader = $('.loader');




// INIT

$(document).ready(function () {

    main.removeClass('is-blur');
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

    if ($(window).width() < 587) {
        $('html,body').animate({
            scrollTop: $('#end').offset().top
        }, 'fast');

    } else {
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
}


function share() {

    $('.fb, .tw').click(function (e) {
        e.preventDefault();
        window.open($(this).data('href'), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    });

}

function refresh(social, num) {

    console.log(social);


    var link;

    switch (social) {
        case 'fb':
            link = 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fdd-group01.github.io%2Fphase03%2Fshare' + num;
            break;
        case 'tw':
            link = 'https://twitter.com/intent/tweet?url=http%3A%2F%2Fdd-group01.github.io%2Fphase03%2Fshare' + num + '&hashtags=AFManifesto&text=&original_referer=';
            break;

        case 'ig':

            break;
    }

    $('.' + social).data('href', link);

}


function roulette() {

    share();


    var option = {
        speed: 100,
        duration: 1,
        startCallback: function () {

            $('.page_roulette_share').addClass('is-disabled');

        },
        slowDownCallback: function () {},
        stopCallback: function ($stopElm) {
            var ID = $stopElm.data('number');
            console.log(ID);
            refresh('fb', ID);
            refresh('tw', ID);
            $('.page_roulette_share').removeClass('is-disabled');
        }
    }

    var rouletter = $('.page_roulette_img')
    rouletter.roulette(option);
    rouletter.roulette('start');


    $('.start').click(function () {
        rouletter.roulette('start');
    });


}
