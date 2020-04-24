class Board {

  constructor(game) {

    this.game = game;

    if (!game instanceof Game) {

      throw 'game must be an instance of Game';

    }




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
if (typeof global !== 'undefined') { global.Board = Board };