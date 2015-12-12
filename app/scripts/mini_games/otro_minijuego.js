OtroMinijuego.prototype = new MiniGame();
OtroMinijuego.prototype.constructor = OtroMinijuego;

function OtroMinijuego(player) {
  this.player = player;
  this.duration = 10;
};

OtroMinijuego.prototype.init = function() {
  console.log("Iniciando OtroMinijuego");
  this.$game.find('.mini-game').html("OtroMinijuego GAME!");
};

OtroMinijuego.prototype.draw = function() {
  MiniGame.prototype.draw.call(this);
  //console.log("Pintando OtroMinijuego");
};

OtroMinijuego.prototype.data = function() {
  MiniGame.prototype.data.call(this);
  //console.log("calculando OtroMinijuego")
};

OtroMinijuego.prototype.end = function() {
  console.log("Terminando OtroMinijuego");
};
