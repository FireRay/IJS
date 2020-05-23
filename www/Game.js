class Game {

  constructor() {
    //call methods in following order.
    this.addEventListener();
    this.start();
  }

  start() {
    //create new instance of board and sends current instance of Game to it's constructor. 
    //stores instance of Game in board var.
    if (this.setPlayer1()) {
      if (this.setPlayer2()) {
        this.board = new Board(this)
      }
    } else if (this.setPlayer2()){
      this.board = new Board(this)
    } else {
    this.board = new Board(this)
    }
  }

  setPlayer1() {
    this.name1 = prompt("Namn på röd spelare:");
    this.name1turn = this.name1;
    if (this.name1) {
    this.name1array = this.name1.split('');
    }
    if (!this.name1) {
      this.name1 = "Röd";
      this.name1turn = "Röd";
    } else if (this.name1array[this.name1array.length - 1] == "s"){
      this.name1array.pop();
      this.name1turn = this.name1array.join('');
    }
  }

  setPlayer2() {
    this.name2 = prompt("Namn på gul spelare:");
    this.name2turn = this.name2;
    if (this.name2) {
    this.name2array = this.name2.split('');
    }
    if (!this.name2) {
      this.name2 = "Gul"
      this.name2turn = "Gul";
    } else if (this.name2array[this.name2array.length - 1].toLowerCase() == "s"){
      this.name2array.pop();
      this.name2turn = this.name2array.join('');
    }
  }

  tellTurn(player) {
    if (!(player === 1 || player === 2)) {
      throw "player must be 1 or 2"
    }
    //methods that receives inagrument 1 or 2 in player
    //if value is 1 message changes it's content value to reds turn 
    //if value is 2 message changes it's content value to yellows turn 
    $('.message').innerHTML = player === 1 ? `${this.name1turn}s tur...` : `${this.name2turn}s tur...`;
    // (player === 1) ? $('.message').innerHTML('Röds tur...'): (player === 2) ? $('.message').innerHTML('Guls tur...') : ('');
  }

  over(won) {
    if (!(won === 1 || won === 2 || won === 'draw')) {
      throw 'won must be “draw”, 1 or 2';
    }

    //receive won as inarg
    //if won = 1 the DOM element should display 'Röd vann!'
    //if won = 2 the DOM element should display 'Gul vann!'
    //if won = 'draw' the DOM element should display 'Det blev oavgjort!'
    $('.message').innerHTML = won == 1 ?
    `${this.name1} vann!` : won == 2 ?
    `${this.name2} vann!` : won == 'draw' ? "Det blev oavgjort!" : "";
    //added a button to DOM-element with CSS-class message.
    //button had CSS-class again with text 'Spela igen'. 
    let btn = document.createElement('button');
    btn.className = 'again';
    btn.innerHTML = 'Spela igen';
    $('.message').append(btn);
  }

  addEventListener() {
    this.againClick = event => {
      let againButton = event.target.closest('.again');
      if (!againButton) {
        return;
      }
      this.start();
    }
    $('.message').addEventListener('click', this.againClick);
  }
}

//make it possible to test on backend
if (typeof global !== 'undefined') {
  global.Game = Game
};