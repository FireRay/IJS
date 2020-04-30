require('./_include-all')();

module.exports = function () {

  let checkAddEventListener = false;
  let checkStart = false;


  class testGame extends Game {

    addEventListener() {
      checkAddEventListener = true;

    }
    start() {

      checkStart = true;
    }


  }


  this.Given(/^that the game starts$/, function () {
    // Write code here that turns the phrase above into concrete actions
    new testGame();
  });


  this.Then(/^the constructor should first call addEventListener$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(checkAddEventListener, 'the AddEventListener-method is not called in the constructor').to.be.true;

  });


  this.Then(/^the constructor should call start$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(checkStart, 'the start-method is not called in the constructor').to.be.true;

  });







}