describe("Rock-Paper-Scissors", function() {
  var player1, player2, game;

  beforeEach(function() {

    player1 = new Player('Your');
    player2 = new Player('Computers');
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {
        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should beat izzard', function() {
        player1.picks('rock');
        player2.picks('izzard');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function() {
        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to sock', function() {
        player1.picks('rock');
        player2.picks('sock');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('paper', function() {

      it('should beat rock', function() {
        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

      it('should beat sock', function() {
        player1.picks('paper');
        player2.picks('sock');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to scissors', function() {
        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to izzard', function() {
        player1.picks('paper');
        player2.picks('izzard');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('scissors', function() {

      it('should beat paper', function() {
        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });

      it('should beat izzard', function() {
        player1.picks('scissors');
        player2.picks('izzard');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to rock', function() {
        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to sock', function() {
        player1.picks('scissors');
        player2.picks('sock');
        expect(game.winner()).toBe(player2);
      });

    });

    describe('izzard', function() {

      it('should beat paper', function() {
        player1.picks('izzard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });

      it('should beat sock', function() {
        player1.picks('izzard');
        player2.picks('sock');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to rock', function() {
        player1.picks('izzard');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to scissors', function() {
        player1.picks('izzard');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
      });

    });

    describe('sock', function() {

      it('should beat rock', function() {
        player1.picks('sock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

      it('should beat scissors', function() {
        player1.picks('sock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function() {
        player1.picks('sock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to izzard', function() {
        player1.picks('sock');
        player2.picks('izzard');
        expect(game.winner()).toBe(player2);
      });

    });
  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {
        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null]);
      });

    });

  });

  describe('victory messages', function() {

    it("should return the winner's name, the verb and the loser's name", function() {
      player1.picks('scissors');
      player2.picks('rock');
      expect(game.winningMessage()).toEqual('Alex crushes Mario');
    });

  });

});