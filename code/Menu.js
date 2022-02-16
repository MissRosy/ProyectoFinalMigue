class Menu {
    constructor(){
        this.button = createButton("PLAY");
    }

    delete(){
        delete this.button;
    }

    display(){
        background(menuImg);
        // console.log("Menu Prendido");

        strokeWeight(8);
        stroke("black");
        fill("white");
        textSize(30);
        text("Rescata a Timmy antes que los canivales lo atrapen!",displayWidth/2 - 320,300);
        textSize(25);
        text("El homunculo te ralentiza conforme pasa el tiempo!",displayWidth/2 - 260,340);
        textSize(30);
        fill("red");
        text("¡¡¡Apresurate!!!",displayWidth/2 - 80,380);

        if (gameState === "serve"){
            this.button.position(displayWidth/2-100,displayHeight/2);
            this.button.class("customButton");
            this.button.mousePressed(()=>{
                this.button.hide();
                gameState = "play";
            });
        }

    }
}
