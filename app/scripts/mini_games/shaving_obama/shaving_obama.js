ShavingObama.prototype = new MiniGame();
ShavingObama.prototype.constructor = ShavingObama;

function ShavingObama (player) {
  this.player = player;
  this.duration = 10;
};

ShavingObama.prototype.init = function() {
  console.log("Iniciando ShavingObama");
  this.$game.find('.mini-game').append(this.canvas());
  this.events();
};

ShavingObama.prototype.events = function() {
  var $hair = this.$game.find('.hair');
  var self = this;

  $hair.mousemove(function(e){
    $(this).hide();
    self.stop();
  });
};

ShavingObama.prototype.canvas = function() {
  return  $("<div/>").append(
    $("<img/>",{class:"face", src:"scripts/mini_games/shaving_obama/images/face.png"}),
    $("<img/>",{class:"hair", src:"scripts/mini_games/shaving_obama/images/hair.png"}),
    $("<h1/>").html("AFEITALO!!!!")
  );
}

ShavingObama.prototype.draw = function() {
  //console.log("Pintando ShavingObama");
  MiniGame.prototype.draw.call(this);

};

ShavingObama.prototype.data = function() {
  MiniGame.prototype.data.call(this);
  //console.log("calculando ShavingObama")
};

ShavingObama.prototype.end = function() {
  console.log("Terminando ShavingObama");
};
