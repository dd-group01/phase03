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



    // WIDOW FIX
    $('.title, h1, h3, p, .snap.intro .module, .page_title').widowFix();

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




    //    setTimeout(function () {
    //        main.removeClass('is-blur');
    //        loader.addClass('is-loaded');
    //    }, 2000)

    //    var rouletteFirst = true;
    //    $('.is-end').click(function () {
    //        if (rouletteFirst) {
    //            roulette();
    //            rouletteFirst = false;
    //        }
    //
    //    })


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


    $('.ig, .st').click(function (e) {
        var href = $(this).data('href');
        window.open(href, '_blank');
        e.preventDefault();
    });

}

function refresh(social, num) {

    console.log(social);


    var link;

    switch (social) {
        case 'fb':
            link = 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fbit.ly%2FAFManifesto' + num;
            break;
        case 'tw':
            link = 'https://twitter.com/intent/tweet?url=http%3A%2F%2Fbit.ly%2FAFManifesto' + num;
            break;
        case 'ig':
            link = 'https://dd-group01.github.io/phase03/frontend/img/share/' + num + '/ig.png';
            break;
        case 'st':
            link = 'https://dd-group01.github.io/phase03/frontend/img/share/' + num + '/st.png';
            break;
    }

    $('.' + social).data('href', link);

}



function roulette() {

    var parent = $(".page_roulette_img");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
    parent.find("img:nth-last-child(-n+15)").remove();



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
            refresh('ig', ID);
            refresh('st', ID);
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
