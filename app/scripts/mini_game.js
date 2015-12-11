function MiniGame () {
  this.player = new Player();
  this.fps = 30;
  this.time = 0;
};

MiniGame.prototype.start = function() {
  var self = this;
  console.log("empezando minijuego");
  this.tick = setInterval(function() {
    self.data();
  }, 1000/this.fps);
  this.tack = setInterval(function() {
    if (self.time < self.duration) {
      self.time++;
    } else{
      clearInterval(self.tick);
      clearInterval(self.tack);
      self.finish();
    };
  }, 1000);
};

MiniGame.prototype.finish = function() {
  console.log("terminando minijuego");
  if (this.nextMiniGame) {
    this.nextMiniGame.start();
  };
};

MiniGame.prototype.setNext = function(nextMiniGame) {
  this.nextMiniGame = nextMiniGame;
};
