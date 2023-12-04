
GamePlayManager = {
    init: function() {
        console.log("init");
    },
    preload: function() {
        // qui cargamos los recursos necesarios para luego ser renderizados en
        // el canvas en este caso cargamos una imagen de fondo
        game.load.image('background', 'assets/images/background.png');
    },
    create: function() {
        // luego en el metodo create cargamos esta imagen como un sprite
        // y referenciamos el nombre de la imagen background
        game.add.sprite(0, 0, 'background');
    },
    update: function() {

        console.log("update");
    }
}
// aqui configuramos el arranque del juego configuramos el tamaño de la pantalla
// y a su vez tambien se determina que tipo de render vamos a utilizar CANVAS o openGL
var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
// aqui agregamos el objecto gamepPlayManager
game.state.add("gameplay", GamePlayManager);
// aqui ejecutamos el start del juego.
game.state.start("gameplay");