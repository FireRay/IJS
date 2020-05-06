require('./_include-all')();
require('./_async-helpers.js');


module.exports = function () {
  this.After(() => fixNoSuchWindowError(driver));
  let testGame;
  let removeEventListenerWasCalled = false;
  let theCombo;
  let winnerValue;

  class winGame extends Game {
    start() {
      this.board = new winBoard(this);
    }

    over(won) {
      winnerValue = won;
    }
  }

  class winBoard extends Board {
    winCheck() {
      return {
        winner: 1,
        combo: [
          [0, 0],
          [0, 1],
          [0, 2],
          [0, 3]
        ]
      }
    }

    removeEventListener() {
      removeEventListenerWasCalled = true;
    }


    markWin(combo) {
      theCombo = combo;
    }
  }

  // # 1
  this.Given(/^that method winCheck returns something truthy$/, function () {
    testGame = new winGame();
    testGame.board.makeMove(0);
  });

  this.Then(/^makeMove should call removeEventListener$/, function () {
    expect(removeEventListenerWasCalled).to.be.true;
  });

  // # 2
  this.Given(/^that winCheck returns an object with a combo attribute$/, function () {
    // still happened in testGame from last test
  });

  this.Then(/^the markWin method should be called with the combo value as argument$/, function () {
    expect(theCombo).to.eql([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3]
    ])
  });

  this.Then(/^makeMove should return true$/, async function () {
    // Write code here that turns the phrase above into concrete actions
    expect(await testGame.board.makeMove(0)).to.be.true;
  });


  // # 3
  this.Given(/^that winCheck returns an object with a winner attribute$/, function () {
    // done in previous step
  });

  this.Then(/^the over method should be called with winner value as argument$/, function () {
    expect(winnerValue).to.equal(1)
  });

}