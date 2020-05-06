require('./_include-all')();

module.exports = function () {

  let testGame;
  let results;
  // # 1
  this.Given(/^that the a player has won$/, function () {
    // Write code here that turns the phrase above into concrete actions
    testGame = new Game();
    testGame.board.matrix = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0]
    ];
  });

  this.Then(/^winCheck\(\) returns an object with the winner and combo attribute$/, function () {
    // Write code here that turns the phrase above into concrete actions
    results = testGame.board.winCheck();
    expect(results).to.have.property('winner');
    expect(results).to.have.property('combo');
  });

  // # 2
  this.Given(/^that someone has won$/, function () {
    // Write code here that turns the phrase above into concrete actions
    // No need to add anything here from last Given 
  });

  this.Then(/^the winner attribute of the winCheck\(\) return value should be one \/ two$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(results.winner).to.be.oneOf(['1', '2']);
  });

  // # 3
  this.Given(/^that the outcome of the game is a tie$/, function () {
    // Write code here that turns the phrase above into concrete actions
    testGame.board.matrix = [
      [2, 1, 2, 1, 2, 1, 2],
      [1, 1, 2, 1, 2, 1, 1],
      [2, 2, 1, 2, 1, 2, 2],
      [1, 1, 2, 1, 2, 1, 1],
      [2, 1, 2, 1, 2, 1, 2],
      [1, 1, 1, 2, 1, 1, 1]
    ];
  });


  this.Then(/^the winner attribute of the winCheck\(\) return value should be 'draw'$/, function () {
    // Write code here that turns the phrase above into concrete actions
    results = testGame.board.winCheck();
    expect(results.winner).to.be.equal('draw');
  });

  // # 4
  this.Given(/^that neither of player has won and the game isn't a tie$/, function () {
    // Write code here that turns the phrase above into concrete actions
    testGame.board.matrix = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
  });

  this.Then(/^winCheck\(\) should return the value false$/, function () {
    // Write code here that turns the phrase above into concrete actions
    results = testGame.board.winCheck();
    expect(results).to.be.false;
  });

}