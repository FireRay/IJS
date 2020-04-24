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





