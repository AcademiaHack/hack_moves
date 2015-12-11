function MiniGame () {
  this.fps = 30;
  this.time = 0;
};

MiniGame.prototype.start = function() {
  var self = this;
  console.log("empezando minijuego");
  this.init();
  this.tick = setInterval(function() {
    self.data();
    self.draw();
  }, 1000/this.fps);
  this.tack = setInterval(function() {
    if (self.time < self.duration) {
      self.time++;
    } else{
      self.stop();
    };
  }, 1000);
};

MiniGame.prototype.stop = function() {
  this.stopTick();
  this.stopTack();
  this.finish();
}

MiniGame.prototype.stopTick = function() {
  clearInterval(this.tick);
};

MiniGame.prototype.stopTack = function() {
  clearInterval(this.tack);
};

MiniGame.prototype.finish = function() {
  console.log("terminando minijuego");
  this.end();
  if (this.nextMiniGame) {
    this.nextMiniGame.start();
  };
};

MiniGame.prototype.setContainer = function($game) {
  this.$game = $game;
};

MiniGame.prototype.setNext = function(nextMiniGame) {
  this.nextMiniGame = nextMiniGame;
};

MiniGame.prototype.draw = function() {
  console.log("DRAW DESDE MINIGAME!");
  //this.$game.html(this.time);
};
