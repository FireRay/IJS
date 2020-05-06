require('./_include-all')();

module.exports = function () {

  let testGame;
  // # 1
  this.Given(/^the taken argument is not one or two$/, function () {
    // Write code here that turns the phrase above into concrete actions  
    testGame = new Game();
  });

  this.Then(/^it should throw "([^"]*)"$/, function (expectedErrorMessage) {
    // Write code here that turns the phrase above into concrete actions  
    expect(() => testGame.tellTurn(3)).to.throw(expectedErrorMessage);

  });

  // # 2
  this.Given(/^that it is yellows turn$/, function () {
    // Write code here that turns the phrase above into concrete actions    
    //OBS!!!
    //testGame = new Game();
    testGame.board.currentPlayer = 2;
    testGame.board.render();
  });

  this.Then(/^the \.message element should display Guls tur\.\.\.$/, function () {
    // Write code here that turns the phrase above into concrete actions    
    expect($('.message').innerHTML).to.equal('Guls tur...');
  });

  // # 3
  this.Given(/^that it is reds turn$/, function () {
    // Write code here that turns the phrase above into concrete actions    
    testGame.board.currentPlayer = 1;
    testGame.board.render();
  });

  this.Then(/^the \.message element should display Röds tur\.\.\.$/, function () {
    // Write code here that turns the phrase above into concrete actions    
    expect($('.message').innerHTML).to.equal('Röds tur...');
  });




}