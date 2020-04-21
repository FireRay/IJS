// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
require('./_include-all')();

module.exports = function () {


  let game;


  // # 1
  this.Given(/^that a new Game is created$/, function () {
    game = new Game();
  });

  this.Then(/^it should create a new Board$/, function () {
    expect(game.board).to.be.an.instanceof(Board,
      'game.board is not an instance of Board'
    );
  });


  // # 2
  this.Given(/^that a new Board is created$/, function () {
    // Empty the contents of .board
    $$('.board').innerHTML = '';
    // create a Game, it will create a Board
    new Game();
  });

  this.Then(/^it should render (\d+) divs as children of the board element$/, function (expectedNumberOfDivs) {
    let divsCreated = $$('.board > div').length;
    expect(divsCreated).to.equal(+expectedNumberOfDivs,
      expectedNumberOfDivs + ' divs were not created as children of the .board element'
    );
  });


  // # 3
  this.Given(/^that a game is still in play$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(playInProgress).to.be.true;
  });

  this.Then(/^the \.message element should display a text of who's turn it is$/, function () {
    // Write code here that turns the phrase above into concrete actions
    if (currentPlayer = 1) {
      expect($('.message').innerHTML).to.equal('Röds tur…');
    }
    else if (currentPlayer = 2) {
      expect($('.message').innerHTML).to.equal('Guls tur…');
    }
  });


  // # 4
  this.Then(/^player must equal (\d+) or (\d+)$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(currentPlayer).to.be.oneOf([1, 2])
  });


  // # 5 - SKELETT
  this.Given(/^that the game ends in a draw$/, function () {
    // Write code here that turns the phrase above into concrete actions
    ; // kod här
  });

  this.Then(/^the \.message element displays `Det blev oavgjort!`$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect($('.message').innerHTML).to.equal('Det blev oavgjort!');
  });


  // # 6 - SKELETT
  this.Given(/^that red has won$/, function () {
    // Write code here that turns the phrase above into concrete actions
    ; // kod här
  });

  this.Then(/^the \.message element displays `Röd vann!`$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect($('.message').innerHTML).to.equal('Röd vann!');
  });


  // # 7 - SKELETT
  this.Given(/^that yellow has won$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    ; // kod här
  });

  this.Then(/^the \.message element displays `Gul vann!`$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    expect($('.message').innerHTML).to.equal('Gul vann!');
  });


}