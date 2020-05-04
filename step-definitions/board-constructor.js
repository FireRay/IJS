require('./_include-all')();

module.exports = function () {

  let runGame;
  let runBoard;
  let order = [];
  let startTellturn = false;

  // let testGame = new testGame1();

  class testGame2 extends Board {

    constructor(game) {
      super(game);

      let accessGame = new Game();
      let player = 1;


      /*this.addEventListener();
      this.render();
      accessGame.tellTurn(player);*/


      this.addEventListener()

      {
        order.push(1);
      }

      this.render()

      {
        order.push(2);
      }

      accessGame.tellTurn(player)

      {
        startTellturn = true;
        order.push(3);


      }
    }
  }





  // # 1
  this.Given(/^that the constructor recieves an argument$/, function () {
    // Write code here that turns the phrase above into concrete actions
    runGame = new Game();

  });



  this.Then(/^the argument should be an instance of Game$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(runGame.board.game).to.be.instanceof(Game, '');
  });

  // # 2
  this.Given(/^that the constructor argument is not a instance of Game$/, function () {
    // Write code here that turns the phrase above into concrete actions

    //cannot test this. 

  });

  this.Then(/^an error should display "([^"]*)"$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(() => new Bord()).to.throw('game must be an instance of Game');
  });


  // # 3
  this.Given(/^that Board has a matrix property$/, function () {
    // Write code here that turns the phrase above into concrete actions
    /* runBoard = new Board();
     expect(() => (({
       runBoard
     })).to.have.property(this.apa));*/
    expect(runGame.board).to.have.property('matrix')
  });



  this.When(/^the array has six elements that each stores seven elements$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(runGame.board.matrix).to.have.lengthOf(6);
    for (let i of runGame.board.matrix) {
      expect(i).to.have.lengthOf(7);
    }
  });



  this.Then(/^every element has the value zero$/, function () {
    // Write code here that turns the phrase above into concrete actions

    for (let i of runGame.board.matrix) { // declaration of variable holding index of first arr of elements in matrix
      for (let j of i) { // declaration of variable holding index of second arr of elements in matrix
        expect(j).to.equal(0);
      }

    }

  });
  // # 4
  this.Given(/^that the game has a board$/, function () {
    // Write code here that turns the phrase above into concrete actions
    new Board();
  });

  this.Then(/^the default value of the currentPlayer property is one$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(runGame.board.currentPlayer).to.equal(1);
  });



  this.Then(/^the default value of the playInProgress property is false$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(runGame.board.playInProgress).to.equal(false);
  });

  // # 5
  this.Given(/^that the Board constructor is called$/, function () {
    // Write code here that turns the phrase above into concrete actions
    new testGame2();
  });


  this.Then(/^addEventListener, render, tellTurn should be called in the stated order$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(order).to.eql([1, 2, 3]);
  });




  // # 6
  this.Given(/^that the tellTurn method in being called$/, function () {
    // Write code here that turns the phrase above into concrete actions
    //runGame = new testGame2();

    expect(startTellturn).to.be.true;

  });

  this.Then(/^the tellTurns inargument should be currentPlayer property$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect(() => (({
      runBoard
    })).to.have.property('player'));

  });





}