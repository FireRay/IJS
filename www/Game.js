class Game {

  constructor() {

    //call methods in following order.
    this.addEventListener();
    this.start();

  }

  start() {

    //create new instance of board and sends current instance of Game to it's constructor. 
    //stores instance of Game in board var.
    let board = new Board(this);

  }


  tellTurn(player) {

    //methods that receives inagrument 1 or 2 in player
    //if value is 1 message changes it's content value to reds turn 
    //if value is 2 message changes it's content value to yellows turn 
    (player === 1) ? $('.message').innerHTML('Röds tur...'): (player === 2) ? $('.message').innerHTML('Guls tur...') : ('');


  }





  over(won) {

  }

  addEventListener() {

  }

}

// make it possible to test on backend
if (typeof global !== 'undefined') {
  global.Game = Game
};