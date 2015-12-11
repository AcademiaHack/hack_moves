function Game ($game, miniGames) {
  this.$game = $game;
  this.miniGames = miniGames;
  this.start();

};

Game.prototype.start = function() {
  var length = this.miniGames.length;
  for (var i = 0; i < length; i++) {
    if (i+1 <= length) {
      this.miniGames[i].setNext(this.miniGames[i+1])
    };
  };
  this.miniGames[0].start();
};

