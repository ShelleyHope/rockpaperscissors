function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
}

Player.prototype.randomPicks = function() {
i = Math.floor(Math.random()*5);
array = ['rock', 'paper', 'scissors', 'izzard', 'sock'];
this.pick = array[i];
}