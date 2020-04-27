Feature: The Board class constructor
  The user must be able to play Connect 4
  I need the Board class to call the Game class
  So I can play the game.

  # 1
  Scenario: The Constructor recieves an instance of Game
    Given that the constructor recieves an argument
    Then the argument should be an instance of Game

  # 2
  Scenario: The Constructor should throw an error message
    Given that the constructor argument is not a instance of Game
    Then an error should display "game must be an instance of Game"

  # 3
  Scenario: The elements of the Matrix board
    Given that Board has a matrix property
    When the array has six elements that each stores seven elements
    Then every element has the value zero

  #  4
  Scenario: The Board properties default settings
    Given that the game has a board
    Then the default value of the currentPlayer property is one
    And the default value of the playInProgress property is false

  # 5
  Scenario:The Board constructor call to methods
    Given that the Board constructor is called from the Game class
    Then addEventListener, render, tellTurn should be called in the stated order

  # 6
  Scenario: The call to tellTurns inargument
    Given that the tellTurn method in being called
    Then the tellTurns inargument should be currentPlayer property









