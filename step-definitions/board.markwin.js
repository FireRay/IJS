require('./_include-all')();

module.exports = function () {

  let game = new Game();
  let board = game.board;

  this.Given(/^that one of the players has won$/, function () {
    board.matrix = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0],
      [1, 2, 1, 1, 1, 1, 0]
    ];
    board.render();
  });

  this.When(/^the method markWin\(combo\) recieves the argument combo$/, function () {
    board.markWin([[5, 2], [5, 3], [5, 4], [5, 5]]);
  });

  this.Then(/^adds the css\-class win to each one of the div\-element\.$/, function () {
    let divs = $$('.board > div');
    expect(
      divs[37].classList.contains('win') &&
      divs[38].classList.contains('win') &&
      divs[39].classList.contains('win') &&
      divs[40].classList.contains('win'),
      'The correct divs were not marked with the css class win'
    ).to.be.true;
  });

}
