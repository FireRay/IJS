require('./_include-all')();

module.exports = function () {


  let runGame;




  this.Given(/^that the constructor recieves an argument$/, function () {
    // Write code here that turns the phrase above into concrete actions
    runGame = new Game();

  });



  this.Then(/^the argument should be an instance of Game$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(runGame.board.game).to.be.instanceof(Game, '');

  });


  this.Given(/^that the constructor argument is not a instance of Game$/, function () {
    // Write code here that turns the phrase above into concrete actions

    //cannot test this. 

  });



  this.Then(/^an error should display "([^"]*)"$/, function (expectedErrorMessage) {
    // Write code here that turns the phrase above into concrete actions

    let testBoard = new TestClass();


    expect(() => new Board({})).to.throw(Error, expectedErrorMessage, 'the error is not displayed correctly.');




  });






}