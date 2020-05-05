require('./_include-all')();

module.exports = function () {

  // # 1
  this.Given(/^that the player (\d+) or (\d+) has won$/, function () {
    // Write code here that turns the phrase above into concrete actions
    ;
  });

  this.Then(/^winCheck\(\) returns an object with the winner and combo attribute$/, function () {
    // Write code here that turns the phrase above into concrete actions
    ;
  });

  // # 2
  this.Given(/^that someone has won$/, function () {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^the winner attribute of the winCheck\(\) return value should be (\d+) or (\d+)$/, function () {
    // Write code here that turns the phrase above into concrete actions
    ;
  });

  // # 3
  this.Given(/^that the outcome of the game is a tie$/, function () {
    // Write code here that turns the phrase above into concrete actions
    ;
  });

  this.Then(/^the winner attribute of the winCheck\(\) return value should be 'draw'$/, function () {
    // Write code here that turns the phrase above into concrete actions
    ;
  });

  // # 4
  this.Given(/^that neither of player (\d+) or (\d+) wins or the game is a draw$/, function () {
    // Write code here that turns the phrase above into concrete actions
    ;
  });

  this.Then(/^winCheck\(\) should return the value false$/, function () {
    // Write code here that turns the phrase above into concrete actions
    ;
  });
}