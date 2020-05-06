class Game {

  constructor() {

    //call methods in following order.
    this.addEventListener();
    this.start();
    this.startTellturn = false;


  }

  start() {

    //create new instance of board and sends current instance of Game to it's constructor. 
    //stores instance of Game in board var.
    this.board = new Board(this);

  }


  tellTurn(player) {
    if (!(player === 1 || player === 2)) {
      throw "player must be 1 or 2"
    }
    this.startTellturn = true;

    //methods that receives inagrument 1 or 2 in player
    //if value is 1 message changes it's content value to reds turn 
    //if value is 2 message changes it's content value to yellows turn 
    ($('.message').innerHTML = player === 1) ? 'Röds tur...' : (player === 2) ? 'Guls tur...' : '';

  }





  over(won) {

    if (!(won === 1 || won === 2 || won === 'draw')) {
      throw 'won must be “draw”, 1 or 2';
    }



  }

  addEventListener() {

  }

}

// make it possible to test on backend
if (typeof global !== 'undefined') {
  global.Game = Game
};