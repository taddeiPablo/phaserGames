GamePlayManager = {
    init: function(){
        // al ejecutar phaser el metodo init es el primero que se ejecuta
        console.log('init');
    },
    preload: function(){
        // al ejecutar pahser el metodo preload es el segundo metodo que se va a ejecutar luego
        // del init
        // aqui se cargaran todos los recursos necesarios para nuestro juego
        console.log('preload');
    },
    create: function(){
        // luego se llama al metodo create 
        console.log('create');
    },
    update: function(){
        // y finalmente se llama frame a frame el metodo update todo el tiempo
        console.log('update');
    }
}
var game = new Phaser.Game(1136, 648, Phaser.AUTO);
game.state.add('gameplay', GamePlayManager);
game.state.start('gameplay');