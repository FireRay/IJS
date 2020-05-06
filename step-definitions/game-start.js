require('./_include-all')();

module.exports = function () {
  let testGame;


  this.Given(/^a game is being started$/, function () {
    // Write code here that turns the phrase above into concrete actions
    testGame = new Game();
  });

  this.Then(/^the Game\.start\(\) method should create a new board stored in this\.board$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(testGame.board).to.be.an.instanceof(Board);
  });


}