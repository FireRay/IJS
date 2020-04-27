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
    let winner = {
      vinnaren: '',
      combo: [ [], [], [], [] ]
    }
    let winOffset = [
    [[0, 0], [0, 1], [0, 2] [0, 3]], // horisontal
    [[0, 0], [1, 0], [2, 0], [3, 0]], // vertical 
    [[0, 0], [1, -1], [2, -2], [3, -3]], // diagonal 1
    [[0, 0], [1, -1], [2, -2], [3, -3]] // diagonal 2
    ];
      for (let row = 0; row < 6; row++) {
        for (let column = 0; column < 7; column++){
          for (let w of winOffset) {
            let slots = w.map(([r, c]) => this.matrix[row + r] && this.matrix [row + r] [col + c]).join('');
            if (slots === '1111' || slots === '2222') {
              return +slots[0];
            } //en bit saknas i koden, att kolla om det har blivit oavgjort, isåfall ska wincheck resonera draw
          }
      }
    }

  }

  render() {



  }

  markWin(combo) {



  }

  addEventListener() {
    this.listener = event => {
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
    $('.board').removeEventListener('click', this.listener);


  }



}

// make it possible to test on backend
if (typeof global !== 'undefined') { global.Board = Board };