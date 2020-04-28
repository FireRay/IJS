class Game {

  constructor() {
    //call methods in following order.
    this.addEventListener();
    this.start();
    this.over(3);
  }

  start() {
    //create new instance of board and sends current instance of Game to it's constructor. 
    //stores instance of Game in board var.
    this.board = new Board(this);
  }

  tellTurn(player) {
    //methods that receives inagrument 1 or 2 in player
    //if value is 1 message changes it's content value to reds turn 
    //if value is 2 message changes it's content value to yellows turn 
    (player === 1) ? $('.message').innerHTML('Röds tur...'): (player === 2) ? $('.message').innerHTML('Guls tur...') : ('');
<<<<<<< HEAD


=======
>>>>>>> bb607a2ddbaa5ae73de8eb9f16eeef90b3942ecd
  }

  over(won) {
    if (won !== 'draw' || won !== 1 || won !== 2) {
      throw 'won must be “draw”, 1 or 2'
    }
    //receive won as inarg
    //if won = 1 the DOM element should display 'Röd vann!'
    //if won = 2 the DOM element should display 'Gul vann!'
    //if won = 'draw' the DOM element should display 'Det blev oavgjort!'
    (won === 1) ? $('.message').innerHTML('Röd vann!'):
      (won === 2) ? $('.message').innerHTML('Gul vann') :
      (won === 'draw') ? $('.message').innerHTML('Det blev oavgjort!') :
      ('');
    //added a button to DOM-element with CSS-class message.
    //button had CSS-class again with text 'Spela igen'. 
    let btn = document.createElement('button');
    btn.className = 'again';
    btn.innerHTML = 'Spela igen';
    $('.message').append(btn);
  }

  addEventListener() {
    this.againClick = event => {
      let clickTarget = event.target();
      if (!clickTarget) {
        return;
      } else if (clickTarget = '.again') {
        this.start()
      }
    };
    $('.message').addEventListener('click', this.againClick());
  };
}

//make it possible to test on backend
if (typeof global !== 'undefined') {
  global.Game = Game
};