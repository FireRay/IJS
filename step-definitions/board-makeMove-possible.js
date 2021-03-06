require('./_include-all')();
require('./_async-helpers.js');

module.exports = function () {


  let runGame;
  let startRender = false;
  let overValue;

  class testGame2 extends Game {


    tellTurn(player) {

      overValue = player;

    }

  }

  class testGame extends Game {

    start()

    {
      this.board = new testClass(this);
    }


  }


  class testClass extends Board {


    constructor(game) {
      super(game);



    }

    render()

    {
      startRender = true;
    }



  }



  // # 1
  this.Given(/^that makeMove is possible$/, function () {
    // Write code here that turns the phrase above into concrete actions

    let runGameTest = new testGame();


  });


  // # 1
  this.Then(/^the board method render should be called$/, function () {
    // Write code here that turns the phrase above into concrete actions

    expect(startRender).to.be.true;

  });


  // # 2
  this.Given(/^the move was possible and that currentPlayer is one$/, async function () {
    // Write code here that turns the phrase above into concrete actions
    runGame = new Game();
    runGame.board.currentPlayer = 1;
    await runGame.board.makeMove(4);


  });


  // # 2
  this.Then(/^currentPlayer should be set to two$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(runGame.board.currentPlayer).to.equal(2);
  });


  // # 3
  this.Given(/^the move was possible and that currentPlayer is two$/, async function () {
    // Write code here that turns the phrase above into concrete actions
    runGame = new Game();
    runGame.board.currentPlayer = 2;
    await runGame.board.makeMove(4);

  });


  // # 3
  this.Then(/^currentPlayer should be set to one$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(runGame.board.currentPlayer).to.eql(1);

  });


  // # 4
  this.Given(/^that the move was possible$/, function () {
    // Write code here that turns the phrase above into concrete actions
    runGame = new testGame2();

  });

  // # 4
  this.Then(/^the tellTurn method should be called with the currentPlayer as argument$/, function () {
    // Write code here that turns the phrase above into concrete actions


    runGame.board.currentPlayer = 1;
    expect(overValue).to.eql(1);

  });


  // # 5
  this.Given(/^that the move is possible$/, function () {
    // Write code here that turns the phrase above into concrete actions

    runGame = new Game();
  });

  // # 5

  this.Then(/^it should set playInProgress to false$/, function () {
    // Write code here that turns the phrase above into concrete actions

    expect(runGame.board.playInProgress).to.eql(false);

  });


  // # 6
  this.Given(/^that winCheck wasn't truthy$/, function () {
    // Write code here that turns the phrase above into concrete actions

    runGame = new Game();

  });


  // # 6
  this.Then(/^in the end makeMove returns true$/, async function () {
    // Write code here that turns the phrase above into concrete actions

    expect(await runGame.board.makeMove(3)).to.be.true;

  });







}