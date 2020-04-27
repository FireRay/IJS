class Board {

  constructor(game) {


    if (!game instanceof Game) {

      throw 'game must be an instance of Game';

    }


    this.game = game;
    this.matrix=[ 
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0] 
    ];

    this.currentPlayer = 1;
    this.PlayInProgress = false;

    this.addEventListener();
    this.render();
    this.game.tellTurn(this.currentPlayer);



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
    this.listener = even => {
      let $slot = event.target.closest('.board > div');
      if (!$slot) { return; }
      let $allSlots = [...$$('.board > div ')];
      let index = $allSlots.indexOf($slot);
      let column = index % 7;
      console.log(column);
    };
    $('.board').addEventListener('click', this.listener);

  }

  removeEventListener() {



  }



}

// make it possible to test on backend
if (typeof global !== 'undefined') { global.Board = Board };