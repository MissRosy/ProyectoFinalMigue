class Game {
    constructor() {

    }

    display() {
        background(gameMenuImg);
        
        // Funcion para asignar si se ven los muros o no con el argumento "state"
        
        // Muros en ON (prendidos)
        //Walls("on");
        player.bounceOff(wallsGroup);
        
        if (player.isTouching(wallsGroup)) {
            player.collide(wallsGroup);
            lifes = lifes - 1;
        }

        // estado de juego del player para establecer si esta vivo o muerto
        var playerState = "playing"

        if (lifes <= 0) {
            playerState = "die";
            lifes = 10;
        }

        if (playerState == "die") {
            player.x = playerSpawnX;
            player.y = playerSpawnY;
        }

        if (lifes == 10) {
            playerState = "playing";
        }

        if (npcState === "combat") {

            // Camara
            camera.position.x = player.position.x;
            camera.position.y = player.position.y;

            fill("lightblue");
            textSize(20);
            text("AYUDA!", 1730, 770);

            // // Controles personaje
            if (keyDown("LEFT")) {
                player.x = player.x - 20;
            } else if (keyDown("RIGHT")) {
                player.x = player.x + 20;
            } else if (keyDown("UP")) {
                player.y = player.y - 20;
            } else if (keyDown("DOWN")) {
                player.y = player.y + 20;
            }

            // Controles secundarios (opcional)
            if (keyDown("A")) {
                player.x = player.x - 20;
            } else if (keyDown("D")) {
                player.x = player.x + 20;
            } else if (keyDown("W")) {
                player.y = player.y - 20;
            } else if (keyDown("S")) {
                player.y = player.y + 20;
            }

            strokeWeight(10);
            stroke("black");
            textSize(20);
            if (lifes <= 10) {
                fill("white");
            }
            if (lifes <= 5) {
                fill("orange");
            }
            if (lifes <= 3) {
                fill("red");
            }
            text("Vida // " + lifes + " \\\\", player.x - 50, player.y - 40);
        }

        if (player.isTouching(npc1)) {
            gameState = "question1";
        }

        if (npcState === "dead") {
            background(endImg);
            wallsGroup.destroyEach();
            player.x = displayWidth / 2 + 300;
            player.y = displayHeight/2+375;
            player.scale = 5;

            meta1.x = displayWidth / 2 + 380;
            meta1.y = displayHeight/2+400;
            meta1.scale = 4.8;

            strokeWeight(10);
            stroke("black");
            fill("white");
            textSize(50);
            text("Rescataste a Timmy!!!", displayWidth / 2 + 500, displayHeight/2+130);
            textSize(45);
            text("El juego termino", displayWidth / 2 + 560, displayHeight/2+175);
        }

        /* Pantalla para cuestionario
        backScreen = createSprite(displayWidth / 2, displayHeight / 2 - 50, 700, 400);
        backScreen.shapeColor = "white";
        backScreen.visible = false;*/
    }
}