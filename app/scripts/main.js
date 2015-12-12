$(document).ready(function() {
  var $game;
  var game;
  var player;
  var shavingObama;
  var otroMinijuego;
  var miniGames = [];

  player = new Player();

  shavingObama = new ShavingObama(player);
  otroMinijuego = new OtroMinijuego(player);

  miniGames.push(shavingObama);
  miniGames.push(otroMinijuego);

  $game = $('.game');
  game = new Game($game, miniGames);
  //game = Game.getInstance($game, miniGames);

});
