OtroMinijuego.prototype = new MiniGame();
OtroMinijuego.prototype.constructor = OtroMinijuego;

function OtroMinijuego () {
  this.duration = 10;
};

OtroMinijuego.prototype.draw = function() {
  console.log("Pintando OtroMinijuego");
};

OtroMinijuego.prototype.data = function() {
  console.log("calculando OtroMinijuego")
};
