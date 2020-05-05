Feature: Making a move by placing a brick
  As a player
  I want to be able to make a move
  To be able to play the game

  Scenario: Column must be zero to six
    Given that a column argument is taken
    Then it must be an integer between zero to six

  Scenario: Error message
    Given that column isn't an integer between zero and siz
    Then it should throw and error saying "column must be an integer between 0 and 6"

  Scenario: playInProgress is true
    Given that playInProgress is true
    Then makeMove() should return null

  Scenario: column is full
    Given that the selected column is full
    Then makeMove() should return false

  Scenario: Set playInProgress to true
    Given that the move is possible
    Then playInProgress should be set to true


// I'm stopping here because I'm not exactly sure what to do, will continue later