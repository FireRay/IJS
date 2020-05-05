require('./_include-all')();

module.exports = function () {
  let testGame;
  let allSlots;
  let counter = [];
  // # 1
  this.Given(/^that a game is in play$/, function () {
    // Write code here that turns the phrase above into concrete actions
    testGame = new Game();
  });

  this.Then(/^the DOM element \.board should have fortytwo divs in it$/, function () {
    // Write code here that turns the phrase above into concrete actions
    allSlots = [...$$('.board > div ')];
    expect(allSlots.length).to.equal(42);

  });

  // # 2

  this.Given(/^that a player has a brick on a spot$/, function () {
    // Write code here that turns the phrase above into concrete actions
    testGame.board.matrix = [
      [1, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
    testGame.board.render();
  });



  this.Then(/^the div on that spot should have the class representing the player$/, function () {
    // Write code here that turns the phrase above into concrete actions
    allSlots = [...$$('.board > div ')];
    expect(allSlots[0].className).to.equal('red');
    expect(allSlots[1].className).to.equal('yellow');

  });

  // # 3

  this.Given(/^that the board has fortytwo divs in it$/, function () {
    // Write code here that turns the phrase above into concrete actions
    for (i of allSlots) {
      i.innerHTML == "<div></div>" ? counter.push(1) : ''
    };
  });

  this.Then(/^each of those divs should have an empty div in them$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(counter.length).to.equal(42)
  });

}