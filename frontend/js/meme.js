for (var i = 1; i < 25; i++) {

    $('.meme-carousel').append("<img src='https://dd-group01.github.io/phase03/frontend/img/page02/meme/" + i + ".jpg' class='meme-img' />");

}




$('.meme-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
});
