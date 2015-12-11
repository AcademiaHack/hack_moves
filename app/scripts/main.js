$(document).ready(function() {
  var $game;
  var game;
  var shavingObama;
  var otroMinijuego;
  var miniGames = [];



  shavingObama = new ShavingObama();
  otroMinijuego = new OtroMinijuego();
  miniGames.push(shavingObama);
  miniGames.push(otroMinijuego);

  $game = $('.game');
  //game = new Game($game, miniGames);
  game = Game.getInstance($game, miniGames);

});
