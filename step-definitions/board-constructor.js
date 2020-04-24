require('./_include-all')();

module.exports = function () {

  let testGame;
  let carl;


  class TestClass extends Game {

    start() {
      carl = new Board('JOnas');

    }



  }




  this.Given(/^that the constructor recieves an argument$/, function () {
    // Write code here that turns the phrase above into concrete actions
    new TestClass();

  });



  this.Then(/^the argument should be an instance of Game$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(carl.game).to.be.instanceof(Game, '');

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