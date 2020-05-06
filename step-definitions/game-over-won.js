require('./_include-all')();

module.exports = function () {


  let testGame;

  this.Given(/^that the methods recives an invalid argument$/, function () {
    // Write code here that turns the phrase above into concrete actions

    //test below

  });


  this.Then(/^an error message "([^"]*)" be thrown$/, function (Errormessage) {
    // Write code here that turns the phrase above into concrete actions
    testGame = new Game();
    expect(() => testGame.over('3')).to.throw(Errormessage);
  });


  this.Given(/^that the game has ended as draw$/, function () {
    // Write code here that turns the phrase above into concrete actions
    testGame.over('draw');

  });



  this.Then(/^a message displaying “Det blev oavgjort!”$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect($('.message').innerHTML).to.include('Det blev oavgjort!');

  });



  this.Given(/^that the game has finished and red has won$/, function () {
    // Write code here that turns the phrase above into concrete actions
    testGame.over(1);
  });



  this.Then(/^a message displaying the winner Röd vann!$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect($('.message').innerHTML).to.include('Röd vann!');

  });



  this.Given(/^that the game has finished and yellow has won$/, function () {
    // Write code here that turns the phrase above into concrete actions
    testGame.over(2);
  });



  this.Then(/^a message displaying the winner Gul vann!$/, function () {
    // Write code here that turns the phrase above into concrete actions
    expect($('.message').innerHTML).to.include('Gul vann!');

  });

  this.Given(/^that the game is over$/, function () {
    // Write code here that turns the phrase above into concrete actions

    //game is still over from last test

  });


  this.Then(/^the \.message element should have a button with the class again$/, function () {
    // Write code here that turns the phrase above into concrete actions

    let classButton = $('.message > button').className;
    expect(classButton).to.eql('again');

  });















}