var slide_svg = $('.slide__viz'),
    slide_control = $('.slide__control');

$.get("./frontend/viz/page05/slideshow.svg", function (data) {
    var svg = new XMLSerializer().serializeToString(data.documentElement);
    slide_svg.append(svg);
    loadScript();
});

function loadScript() {

    slide_svg.find('g#Livello_1').addClass('is-active');


    slide_control.find('.slide__control_dot').hover(function () {
        slide_control.find('.slide__control_dot').removeClass('is-active');
        slide_svg.find('g').removeClass('is-active');
        var num = $(this).data('num');

        slide_svg.find('g#Livello_' + num).addClass('is-active');
        $(this).addClass('is-active');
    });

};
