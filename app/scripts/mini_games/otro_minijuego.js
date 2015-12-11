OtroMinijuego.prototype = new MiniGame();
OtroMinijuego.prototype.constructor = OtroMinijuego;

function OtroMinijuego () {
  this.duration = 10;
};

OtroMinijuego.prototype.init = function() {
  console.log("Iniciando OtroMinijuego");
};

OtroMinijuego.prototype.draw = function() {
  MiniGame.prototype.draw.call(this);
  //console.log("Pintando OtroMinijuego");
};

OtroMinijuego.prototype.data = function() {
  //console.log("calculando OtroMinijuego")
};

OtroMinijuego.prototype.end = function() {
  console.log("Terminando OtroMinijuego");
};
