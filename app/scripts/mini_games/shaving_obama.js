ShavingObama.prototype = new MiniGame();
ShavingObama.prototype.constructor = ShavingObama;

function ShavingObama () {
  this.duration = 10;
};

ShavingObama.prototype.init = function() {
  console.log("Iniciando ShavingObama");
};

ShavingObama.prototype.draw = function() {
  //console.log("Pintando ShavingObama");
  MiniGame.prototype.draw.call(this);
  
};

ShavingObama.prototype.data = function() {
  //console.log("calculando ShavingObama")
};

ShavingObama.prototype.end = function() {
  console.log("Terminando ShavingObama");
};
