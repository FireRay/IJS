require('./_include-all')();

module.exports = function () {

  // # 1
  this.Given(/^that method winCheck returns something truthy$/, function () {});

  this.Then(/^makeMove should call removeEventListener$/, function () {});

  // # 2
  this.Given(/^that winCheck returns an object with a combo attribute$/, function () {});

  this.Then(/^the markWin method should be called with the combo value as argument$/, function () {});

  this.Then(/^winCheck should return true$/, function () {});

  // # 3
  this.Given(/^that winCheck returns an object with a winner attribute$/, function () {});

  this.Then(/^the over method should be called with winner value as argument$/, function () {});

  this.Then(/^winCheck should return true$/, function () {});

}