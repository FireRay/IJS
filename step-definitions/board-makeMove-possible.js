require('./_include-all')();

module.exports = function () {

  let runTestBoard;
  let runBoard;
  let runGame;
  let startRender = false;


  class testClass extends Board {


    constructor(game) {
      super(game);

      this.render()

      {
        startRender = true;
      }


    }



  }




  //# 1

  this.Given(/^that the move is possible$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });

  //# 1

  this.Then(/^playInProgress should be set to true$/, function () {
    // Write code here that turns the phrase above into concrete actions
    runBoard = new Board();
    expect(runBoard.makeMove.playInProgress).to.equal(true);

  });


  //# 2
  this.Given(/^that makeMove is possible$/, function () {
    // Write code here that turns the phrase above into concrete actions
    runTestBoard = new testClass();
    expect(makeMove()).to.not.throw();

  });

  //# 2
  this.Then(/^the board method render should be called$/, function () {
    // Write code here that turns the phrase above into concrete actions

    expect(startRender).to.be.true;

  });


  //# 3
  this.Given(/^the move was possible and that currentPlayer is two$/, function () {
    // Write code here that turns the phrase above into concrete actions


  });


  //# 3
  this.Then(/^currentPlayer should be set to one$/, function () {
    // Write code here that turns the phrase above into concrete actions

    expect(runBoard.makeMove.currentPlayer).to.eql(2);

  });



  //# 4
  this.Given(/^that the move was possible$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });


  //# 4
  this.Then(/^the tellTurn method should be called with the currentPlayer as argument$/, function () {
    // Write code here that turns the phrase above into concrete actions
    runGame = new Board();
    expect(() => (({
      tellTurn(player)
    })).to.have.property('this.currentPlayer'));

  });

  //# 5

  this.Given(/^that the move was possible$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });

  //# 5
  this.Then(/^it should set playInProgress to true$/, function () {
    // Write code here that turns the phrase above into concrete actions
    runBoard = new Board();
    expect(runBoard.makeMove.playInProgress).to.equal(true);


  });


  //# 6
  this.Given(/^that winCheck wasn't truthy$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });

  ///# 6
  this.Then(/^in the end makeMove returns true$/, function () {
    // Write code here that turns the phrase above into concrete actions

    expect()


  });

}