require('./_include-all')();

module.exports = function () {


  let checkStart = false;

  class testEvent extends Game {

    start() {

      checkStart = true;
    }

  }

  let game;


  this.Given(/^that the method addEventListeners has an EventListener with a click event$/, function () {
    // Write code here that turns the phrase above into concrete actions
    game = new Game();
    game.addEventListener();
  });

  this.When(/^you click the button$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect($('.again').addEventListener('click')).to.equal('click');

  });

  this.Then(/^the start method should be called\.$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(checkStart, 'the start-method is not called in the constructor').to.be.true;

  });


}