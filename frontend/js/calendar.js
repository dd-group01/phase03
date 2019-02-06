 if ($('#animals').length) {



     $.get("./frontend/img/page01/calendar.svg", function (data) {
         var svg = new XMLSerializer().serializeToString(data.documentElement);
         $('#calendar').append(svg);

         $("#calendar svg [id*='x32']").hover(function () {



             var $this = $(this),
                 text = $this.data("text");

             $(".calendarpopup").addClass("is-visible").html(text);

             $(this).addClass("is-hover");
             $("#calendar svg [id*='x32']").not($this).addClass("is-disabled");

         }, function () {
             $("#calendar svg [id*='x32']").removeClass("is-disabled is-hover");
             $(".calendarpopup").removeClass("is-visible");
         });



         $(document).on("mousemove", function (event) {
             $(".calendarpopup").css({
                 left: event.pageX + 10,
                 top: event.pageY + 10
             });
         });


     })

 }
