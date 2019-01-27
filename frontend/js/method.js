var gameScreen = $('body')
var newWidth = 500;
var newHeight = 100;

function spawnShip(game) {
    var windowWidth = $(window).width()
    var windowHeight = $(window).height()
    var randWidth = Math.floor(Math.random() * windowWidth - 100)
    var randHeight = Math.floor(Math.random() * windowHeight)
    var angle2 = Math.floor(Math.random() * windowHeight);

    var ship = $(document.createElement('div'))
    ship.addClass('circle')
    ship.css({
        top: randHeight,
        transform: 'rotate(' + angle2 + 'deg)',
        left: randWidth,
        position: 'fixed',
        height: newHeight,
        width: newWidth,
    })
    ship.animate({
        'background-position-x': '-100%',
        'background-position-y': '0%',
    }, 500)

    game.append(ship)
}

//setInterval(function () {
//    spawnShip(gameScreen)
//}, 100)
