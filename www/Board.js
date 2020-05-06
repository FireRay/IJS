class Board {

  constructor(game) {
    //game must be an instance of the class Game
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
    //checks to see column has correct value
    if (!(column >= 0 && column <= 6 && column % 1 === 0)) {
      throw 'column must be an integer between 0 and 6'
    }
    //checks to see if play is in progress
    if (this.playInProgress === true) {
      return null;
    }
    //checks to see if selected column is full
    if (this.matrix[0][column] !== 0) {
      return false;
    }

    //if the move is possible

    //sets playInProgress to true
    //to prevent another move being made until its done
    this.playInProgress = true;
    //temporarly put the first brick at the top of the column
    this.matrix[0][column] = this.currentPlayer;
    //call render
    this.render();
    //call on sleep for 50ms
    await sleep(50);
    //check next row for brick
    for (let i = 1; i < 6; i++) {
      if (this.matrix[i][column] == 0) {
        //if next row is empty, remove brick from current row
        this.matrix[i - 1].splice(column, 1, 0);
        //add brick to next row, render it, wait 50ms
        this.matrix[i][column] = this.currentPlayer;
        this.render();
        await sleep(50);
      } else {
        //if next row isn't empty, stop the for loop
        break;
      }
    }
    //call winCheck if it returns truthy
    if (this.winCheck()) {
      //remove event listener
      this.removeEventListener();
      //if this.winCheck() has a combo attribute
      if (this.winCheck().combo) {
        //call the markWin method with the combo attribute
        this.markWin(this.winCheck().combo)
      }
      //call the game over method over() with winner
      this.game.over(this.winCheck().winner)
      return true;
    }
    //change current player
    this.currentPlayer == 1 ? this.currentPlayer = 2 : this.currentPlayer == 2 ? this.currentPlayer = 1 : '';
    //call tellTurn with the new player (this.currentPlayer) as argument
    this.game.tellTurn(this.currentPlayer);
    //set play in progress to false
    this.playInProgress = false;
    //return true
    return true;

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
    return false
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
  global.Game = Game
};