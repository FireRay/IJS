require('./_include-all')();

module.exports = function () {


  let runGame;
  let runBoard;








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


    expect(() => new Board({})).to.throw(Error, expectedErrorMessage, 'the error is not displayed correctly.');


  });


  this.Given(/^that Board has a matrix property$/, function () {
    // Write code here that turns the phrase above into concrete actions
    runBoard = new Board();
    expect(() => (({ runBoard })).to.have.property(this.matrix));
  });



  this.When(/^the array has six elements that each stores seven elements$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(this.matrix).to.have.lengthOf(6);
  });



  this.Then(/^every element has the value zero$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });






}