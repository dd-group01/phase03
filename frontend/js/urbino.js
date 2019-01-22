 if ($('#urbino').length) {



     $.get("./frontend/viz/page05/slideshow-new.svg", function (data) {
         var svg = new XMLSerializer().serializeToString(data.documentElement);
         $('#urbino').append(svg);


         $('#urbino circle').hover(function () {
             $('.urbino-popup').toggleClass('is-visible')
         });


         $('#urbino').on('mousemove', function (evt) {
             var x = evt.pageX - $(this).offset().left + 10;
             var y = evt.pageY - $(this).offset().top + +20;

             $('.urbino-popup').css({
                 top: y,
                 left: x
             });
         })



     });

 }
