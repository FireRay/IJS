require('./_include-all')();

module.exports = function () {


  let runGame;
  let runBoard;
  let checkAddEventListener;
  let checkTellturn;
  let checkRender;
  // let testGame = new testGame1();


  class testGame2 extends Board {

    constructor(game) {
      this.currentPlayer = 1;
    }


    addEventListener() {
      checkAddEventListener = true;

    }

    render() {

      checkRender = true;
    }

    tellTurn(player) {
      checkTellturn = true;

    }

  }


  // # 1
  this.Given(/^that the constructor recieves an argument$/, function () {
    // Write code here that turns the phrase above into concrete actions
    runGame = new Game();

  });



  this.Then(/^the argument should be an instance of Game$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(runGame.board.game).to.be.instanceof(Game, '');
  });

  // # 2
  this.Given(/^that the constructor argument is not a instance of Game$/, function () {
    // Write code here that turns the phrase above into concrete actions

    //cannot test this. 

  });



  this.Then(/^an error should display "([^"]*)"$/, function (expectedErrorMessage) {
    // Write code here that turns the phrase above into concrete actions


    expect(() => new Board({})).to.throw(Error, expectedErrorMessage, 'the error is not displayed correctly.');


  });

  // # 3
  this.Given(/^that Board has a matrix property$/, function () {
    // Write code here that turns the phrase above into concrete actions
    runBoard = new Board();
    expect(() => (({
      runBoard
    })).to.have.property(this.matrix));
  });



  this.When(/^the array has six elements that each stores seven elements$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(this.matrix).to.have.lengthOf(6);
  });



  this.Then(/^every element has the value zero$/, function () {
    // Write code here that turns the phrase above into concrete actions

    for (let i of matrix) { // declaration of variable holding index of first arr of elements in matrix
      for (let j of i) { // declaration of variable holding index of second arr of elements in matrix
        expect(i, j).to.equal(0);
      }

    }

  });
  // # 4
  this.Given(/^that the game has a board$/, function () {
    // Write code here that turns the phrase above into concrete actions
    new Board();
  });

  this.Then(/^the default value of the currentPlayer property is one$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(currentPlayer).to.equal(1);
  });



  this.Then(/^the default value of the playInProgress property is false$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(playInProgress).to.equal(false);
  });

  // # 5
  this.Given(/^that the Board constructor is called from the Game class$/, function () {
    // Write code here that turns the phrase above into concrete actions
    new testGame2(testGame);

  });

  this.Then(/^addEventListener, render, tellTurn should be called in the stated order$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(checkAddEventListener, 'the AddEventListener-method is not called in the constructor').to.be.true;
    expect(checkTellturn, 'the tellTurn-method is not called in the constructor').to.be.true;
    expect(checkRender, 'the render-method is not called in the constructor').to.be.true;

  });

  // # 6
  this.Given(/^that the tellTurn method in being called$/, function () {
    // Write code here that turns the phrase above into concrete actions
    game = new testGame2();
    runGame = game.tellTurn(player);
  });

  this.Then(/^the tellTurns inargument should be currentPlayer property$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(() => (({
      runGame
    })).to.have.property(this.currentPlayer));

  });





}