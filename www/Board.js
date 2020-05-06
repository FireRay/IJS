class Board {

  constructor(game) {

    if (!(game instanceof Game)) {
      throw 'game must be an instance of Game';
    }

    //sets up all the properties for Board
    this.game = game;
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

    //call on methods
    this.addEventListener();
    this.render();
    this.game.tellTurn(this.currentPlayer);
  }

  async makeMove(column) {
    this.game.tellTurn();


  }

  winCheck() {
    let winOffset = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3]
      ], // horisontal
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0]
      ], // vertical 
      [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3]
      ], // diagonal 1
      [
        [0, 0],
        [1, -1],
        [2, -2],
        [3, -3]
      ] // diagonal 2
    ];

    let currentSlot = [];

    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        for (let w of winOffset) {
          let slots = w.map(([r, c]) => this.matrix[row + r] && this.matrix[row + r][col + c]).join('');

          if (slots === '1111' || slots === '2222') {
            for (let propWin of w) {
              currentSlot.push([row + propWin[0], col + propWin[1]]);
            }

            return {
              winner: slots[0],
              combo: currentSlot
            }
          }
        }

        if (this.matrix[0].indexOf(0) === -1) {
          return {
            winner: 'draw'
          }
        }

      }

    }
    return false;
  }

  render() {
    $('.board').innerHTML = '';
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        let div = document.createElement('div');
        let divEmpty = document.createElement('div');
        (this.matrix[row][col] == 1) ? div.className = 'red': (this.matrix[row][col] == 2) ? div.className = 'yellow' : '';
        // lägger till vilket nummer diven har i class name
        // div.className += ' ' + ((col + 1) + (row * 7)); 
        div.append(divEmpty);
        $('.board').append(div);

      }
    }
  }

  markWin(combo) {
    let allSlots = [...$$('.board > div ')];
    for (let winSlot of combo) {
      winSlot = (winSlot[1]) + (winSlot[0] * 7);
      allSlots[winSlot].className += ' win';

    }
  }

  addEventListener() {
    this.listener = event => {
      let slot = event.target.closest('.board > div');
      if (!slot) {
        return;
      }
      let allSlots = [...$$('.board > div ')];
      let index = allSlots.indexOf(slot);
      let column = index % 7;
      return this.makeMove(column);
    };
    $('.board').addEventListener('click', this.listener);
  }

  removeEventListener() {
    $('.board').removeEventListener('click', this.listener);
  }
}

//make it possible to test on backend
if (typeof global !== 'undefined') {
  global.Board = Board
};