ShavingObama.prototype = new MiniGame();
ShavingObama.prototype.constructor = ShavingObama;

function ShavingObama () {
  this.duration = 10;
};

ShavingObama.prototype.draw = function() {
  console.log("Pintando ShavingObama");
};

ShavingObama.prototype.data = function() {
  console.log("calculando ShavingObama")
};
