
GamePlayManager = {
    init: function() {
        /**
         * aqui en esta seccion vamos a modificar la escala de la pantalla
         * de nuestro juego para que se ajuste como debe ser a nuestra pantalla
         * para eso utilizaremos algunas configuraciones muy necesarias
        */
        // primero llamaremos a scaleMode para ajustar el juego a las 
        // dimenciones de la pantalla
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // ahora procederemos a alinear el juego en este caso de modo horizontal
        game.scale.pageAlignHorizontally = true;
        // ahora procederemos a alinear el juego en este caso en modo vertical
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('background', 'assets/images/background.png');
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
    },
    update: function() {
        
    }
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");