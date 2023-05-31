/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 8;
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 200; // y-positie van speler

var vijandX = 1280; // x-positie van vijand
var vijandY = 300; // y-positie van vijand

 // y-positie van rots

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler
  if (keyIsDown(87)){ // [w] key
    spelerY = spelerY -5;
  }
  if (keyIsDown(83)){ // [s] key
    spelerY = spelerY +5;
  }
  if (spelerY < 20){
    spelerY = 20;
  }
  if (spelerY > 700){
    spelerY = 700;
  }
  // vijand
  vijandX = vijandX -15;
  if (vijandX < 0){
    vijandX = 1280;
    vijandY = random(1, 700);
  }
  

  // kogel

  
  
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand
  if (spelerX - vijandX <50 &&
      spelerX - vijandX >-50 &&
     spelerY - vijandY <50 &&
     spelerY - vijandY >-50){
    console.log("Botsing");
     }

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
   fill("blue")
  rect(0, 0, 1280, 720)
  // vijand
   fill("red");
  rect(vijandX - 25, vijandY - 25, 50, 50);
  fill("black");
  ellipse(vijandX , vijandY, 10, 10);

  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  //rots


  // punten en health
  

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
   if (spelerX - vijandX <50 &&
      spelerX - vijandX >-50 &&
     spelerY - vijandY <50 &&
     spelerY - vijandY >-50){
    console.log("Botsing");
     return true;
     }
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    console.log("spelen")
    
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
   console.log("game-over")
    textSize(50);
    fill("white");
    text("gameover, druk enter om opnieuw te spelen", 100, 100);
    if(keyIsDown(13)){ //enter
      spelStatus = SPELEN;
      vijandX = 1280
      vijandY = random(1, 700)
    }
  }
}
