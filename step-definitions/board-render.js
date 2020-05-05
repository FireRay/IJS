require('./_include-all')();

module.exports = function () {
  let testGame;

  // # 1
  this.Given(/^that a game is in play$/, function () {
    // Write code here that turns the phrase above into concrete actions
    testGame = new Game();
  });

  this.Then(/^the DOM element \.board should have fortytwo divs in it$/, function () {
    // Write code here that turns the phrase above into concrete actions
    ;
  });
  // # 2

  this.Given(/^that a player has a brick on a spot$/, function () {
    // Write code here that turns the phrase above into concrete actions
    ;
  });


  this.Then(/^the div on that spot should have the class representing the player$/, function () {
    // Write code here that turns the phrase above into concrete actions
    ;
  });

  // # 3

  this.Given(/^that the board has fortytwo divs in it$/, function () {
    // Write code here that turns the phrase above into concrete actions
    ;
  });

  this.Then(/^each of those divs should have an empty div in them$/, function () {
    // Write code here that turns the phrase above into concrete actions
    ;
  });

}