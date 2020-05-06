require('./_include-all')();

module.exports = function () {


  let order = [];


  class testGame extends Game {
    addEventListener() {
      order.push(1);
    }

    start() {
      order.push(2);
    }
  }


  this.Given(/^that the game starts$/, function () {
    // Write code here that turns the phrase above into concrete actions
    new testGame();
  });


  this.Then(/^the constructor should call addEventListener and start in order$/, function () {
    // Write code here that turns the phrase above into concrete actions
    console.log(order);
    expect(order).to.eql([1, 2]);
  });







}