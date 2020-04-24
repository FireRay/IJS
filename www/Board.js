class Board {

  constructor(game) {


    if (!game instanceof Game) {

      throw 'game must be an instance of Game';

    }


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
if (typeof global !== 'undefined') { global.Board = Board };