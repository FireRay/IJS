class Board {

  constructor(game) {

    if (!game instanceof Game) {
      throw 'game must be an instance of Game';
    }


    this.matrix = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
    this.currentPlayer = 1;
    this.playInProgress = false;
    this.game = game;







  }

  async makeMove(column) {



  }


  winCheck() {



  }

  render() {



  }

  markWin(combo) {



  }

  addEventListener() {


  }

  removeEventListener() {



  }



}

// make it possible to test on backend
if (typeof global !== 'undefined') {
  global.Board = Board
};