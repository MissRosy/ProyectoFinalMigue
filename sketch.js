// Paredes Lab1
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,
    wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall21,wall22,wall23,wall24,wall25,wall26,
    wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38;

// Imagenes VAR
var playerAnm,npc1Anm,meta1Anm,menuImg,gameMenuImg;

// PC,NPC
var player, npc1, meta1;

//Estado inicial juego
var gameState = "serve";

// Elementos
var backScreen, wallsGroup;

// JS Codes
var menu, game, questions,system,answers;

// Vidas
var lifes = 10;

// Intentos pregunta
var trys = 3;

// Estado npc
var npcState = "combat";

//constantes
const playerSpawnX = 70;
const playerSpawnY = 80;


function preload() {
    menuImg = loadImage("MenuImg.jpg");

    meta1Anm = loadImage("img/mt1.png","img/mt2.png","img/mt3.png","img/mt4.png");

    answerImg = loadImage("question1BG.jpg");

    playerAnm = loadAnimation("img/wr1.png","img/wr2.png","img/wr3.png","img/wr4.png","img/wr5.png","img/wr6.png");

    npc1Anm = loadAnimation("img/st1.png","img/st2.png","img/st3.png","img/st4.png","img/st5.png","img/st6.png","img/st7.png","img/st8.png","img/st9.png","img/st10.png",
                           "img/st11.png","img/st12.png","img/st13.png","img/st14.png","img/st15.png","img/st16.png","img/st17.png","img/st18.png","img/st19.png","img/st20.png",
                           "img/st21.png");
    
    gameMenuImg = loadImage("gameBG.jpg");

    endImg = loadImage("finishBG.jpg");
}


function setup() {
    createCanvas(displayWidth, displayHeight);
    alert("Presiona F11 para una mejor experiencia!");
    //Creación del grupo
    wallsGroup= new Group();

     // Sprites 
        player = createSprite(50, 50);
        player.addAnimation("Right Run",playerAnm);
        player.debug = false;
        player.setCollider("rectangle", 0, 1, 12, 30);
        player.scale = 1.8

        npc1 = createSprite(displayWidth / 2 + 90, 350, 50, 50);
        npc1.addAnimation("stand",npc1Anm);
        npc1.debug = false;
        npc1.setCollider("rectangle", 0, -110, 100, 470);

        meta1 = createSprite(1770,800,50,50);
        meta1.addAnimation("Stand meta", meta1Anm);
        meta1.scale = 1.5;
        meta1.debug = false;
        meta1.setCollider("rectangle", 0, 0, 210, 60);

        //edges = createEdgeSprites();

        /*function Walls(state) {
            if (state == "on") {*/
                // Muros laberinto createWalls(sprite,x,y,width,height);
                createWalls(wall1, 170, 100, 20, 200);

                createWalls(wall2, 170, 600, 20, 600);

                createWalls(wall3, 120, 500, 100, 20);

                createWalls(wall4, 70, 410, 20, 200);

                createWalls(wall5, 60, 620, 120, 120);

                createWalls(wall6, 115, 750, 125, 20);

                createWalls(wall7, 435, 900, 550, 20);

                createWalls(wall8, 1000, 900, 260, 20);

                createWalls(wall9, 700, 990, 20, 180);

                createWalls(wall10, 860, 900, 20, 360);

                createWalls(wall11, 1350, 900, 260, 20);

                createWalls(wall12, 1120, 815, 20, 190);

                createWalls(wall13, 1210, 815, 20, 190);

                createWalls(wall14, 1030, 730, 200, 20);

                createWalls(wall15, 1300, 730, 200, 20);

                createWalls(wall16, 1480, 775, 20, 270);

                createWalls(wall17, 1015, 640, 950, 20);

                createWalls(wall18, 780, 750, 20, 200);

                createWalls(wall19, 550, 600, 20, 80);

                createWalls(wall20, 680, 555, 20, 150);

                createWalls(wall21, 500, 490, 350, 20);

                createWalls(wall22, 405, 610, 160, 100);

                createWalls(wall23, 510, 730, 370, 20);

                createWalls(wall24, 510, 810, 370, 20);

                createWalls(wall25, 505, 310, 370, 20);

                createWalls(wall26, 400, 190, 480, 20);

                createWalls(wall27, 400, 250, 20, 140);

                createWalls(wall28, 500, 355, 20, 110);

                createWalls(wall29, 680, 435, 20, 260);

                createWalls(wall30, 1600, 630, 20, 900);

                createWalls(wall31, 1500, 490, 200, 20);

                createWalls(wall32, 1450, 390, 300, 20);

                createWalls(wall33, 1300, 400, 20, 200);

                createWalls(wall34, 1050, 490, 500, 20);

                createWalls(wall35, 800, 400, 20, 200);

                createWalls(wall36, 1500, 80, 20, 300);

                createWalls(wall37, 1430, 220, 150, 20);
            /*} else if (state !== "on") {
                state = "on";
            }
        }*/

        
    
    menu = new Menu();
    game = new Game();
    questions = new Questions();
    system = new System();
}

function draw() {
    background(answerImg);

    useQuadTree(true);

    //player.collide(edges);
    
    if (gameState == "serve") {
        menu.display();
        questions.hide();
    }else if (gameState == "play"){
        clear();
        trys = 3;
        game.display();
        menu.delete();
        drawSprites();
        questions.hide();
        questions.button1.style('background', 'gray');
        if (player.isTouching(meta1)) {
            npcState = "dead";
        }
    } else if (gameState == "question1") {
        questions.display();
        questions.show();
    }
}

function createWalls(sprite,x,y,width,height) {
    sprite = createSprite(x,y,width,height);
    sprite.shapeColor = 16, 17, 2;
    wallsGroup.add(sprite);
}