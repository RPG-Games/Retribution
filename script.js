//variables 
var knight;
//end variables

//constants
var USER_LEVEL = 1; //there is basically a single mission that the user is trying to achieve (find out who the murderer is), but each level has a secret to uncover, potential treasure to get (maybe), and a potential enemy to fight
var GAME_MODE = 2; //#1 is easy, #2 is normal, and #3 is hard - these are basically how hard the game is (I don't know if we'll use this or not - at least until the game is pretty far underway)
//end constants

function Knight() {
  
} //end Knight()

//////////////////////////////
/////enemies
////////////////////////////

function findEnemy() {
  
} //end findEnemy()

function Assassin(level) {
  
} //end Assassin()

function Troll(level) {
  
} //end Troll()

//////////////////////////////
/////end of enemies
////////////////////////////

function init() {
  var scene = new Scene();
  knight = new Knight();
  scene.start();
} //end init()
