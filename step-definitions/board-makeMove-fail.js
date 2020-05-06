require('./_include-all')();
require('./_async-helpers.js');

module.exports = function () {
  let testGame;
  // # 1
  this.Given(/^that the method recieves an argument that isn't an integer between zero and six$/, function () {
    // Write code here that turns the phrase above into concrete actions
    testGame = new Game();
  });

  this.Then(/^it should throw an error saying "([^"]*)"$/, async function (expectedErrorMessage) {
    // Write code here that turns the phrase above into concrete actions
    expect(await testGame.board.makeMove(7)).to.throw(expectedErrorMessage);
  });

  // # 2
  this.Given(/^that playInProgress is true$/, function () {
    // Write code here that turns the phrase above into concrete actions
    testGame.playInProgress = true;
  });

  this.Then(/^makeMove should return null$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(testGame.makeMove(0)).to.be.a('null');
  });

  // # 3
  this.Given(/^that the selected column is full$/, function () {
    // Write code here that turns the phrase above into concrete actions
    testGame = new Game();
    testGame.matrix = [
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1]
    ];
  });

  this.Then(/^it makeMove should return false$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(testGame.makeMove(6)).to.be.false;
  });
}