class Questions {

    constructor(){

        this.access1 = createInput("Respuesta...")
        this.access1.position(displayWidth/2-80,displayHeight/2-180);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(displayWidth/2-20, displayHeight/2-155);
        this.button1.style('background', 'lightgrey');
    }
    hide(){
        this.access1.hide();
        this.button1.hide();
    }
    show(){
        this.access1.show();
        this.button1.show();
    }

    display(){
        QuestionsReact();

        fill("gray");
        stroke("black");
        text("Intentos = " + trys,910,20);

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                gameState = "play";
                player.x = 1050;
                npc1.destroy();
            } else {
                this.button1.style('background','red');
                trys = trys - 1;
                if (trys <= 0) {
                    gameState = "play";
                    player.x = playerSpawnX;
                    player.y = playerSpawnY;
                }
            }
        });
    }
}