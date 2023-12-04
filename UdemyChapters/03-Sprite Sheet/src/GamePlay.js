
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        // ahora vamos a probar cargar un spritesheet que en este caso sera nuestro
        // personaje principal
        game.load.image('background', 'assets/images/background.png');
        // aqui cargamos el spritesheet que sera nuestro personaje principal
        // para que phaser entienda que estamos cargando un spritesheet y no una imagen
        // cualquiera vamos a utilizar el metodo "spritesheet" le asignamos un id tambien
        // en este caso es el "horse", adicionalmente determinamos los parametros de alto y ancho
        game.load.spritesheet('horse', 'assets/images/horse.png', 84, 156, 2);
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        // aqui cargamos nuestro horse en pantalla indicando primero las coordenadas
        // tener en cuenta que siempre las coordenadas son arriba a la izquierda.
        // y luego indicando el id que definimos en preload
        this.horse = game.add.sprite(0,0,'horse');
        // 
        this.horse.frame = 0;
        this.horse.x = game.width/2;
        this.horse.y = game.height/2;
    },
    update: function() {
        
    }
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");