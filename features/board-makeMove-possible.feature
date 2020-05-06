Feature: When making a move is possible
  As a player
  I want to be able to make a move when it's possible
  So I can play the game

  Scenario: Set playInProgress to true
    Given that the move is possible
    Then playInProgress should be set to true

  Scenario: Call method render
    Given that makeMove is possible
    Then the board method render should be called

  Scenario: Set currentPlayer to one
    Given the move was possible and that currentPlayer is two
    Then currentPlayer should be set to one

  Scenario: Set currentPlayer to two
    Given the move was possible and that currentPlayer is two
    Then currentPlayer should be set to one

  Scenario: Call tellTurn
    Given that the move was possible
    Then the tellTurn method should be called with the currentPlayer as argument

  Scenario: Set playInProgress to false
    Given that the move was possible
    Then it should set playInProgress to true

  Scenario: Return true
    Given that winCheck wasn't truthy
    Then in the end makeMove returns true
