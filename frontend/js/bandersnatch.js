$('.question_button > div').click(function () {

    var next = $(this).data("id"),
        id = $(this).attr("class");

    console.log(id);

    if (id.indexOf("yes") != -1) {
        $(this).closest('.question').addClass("yes")
    } else {
        $(this).closest('.question').addClass("no")
    }

    $(this).closest('.question').slideUp();

    $('.question[data-quest="' + next + '"]').slideDown();

    console.log(next);

})
