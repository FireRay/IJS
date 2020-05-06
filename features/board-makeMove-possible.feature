Feature: When making a move is possible
  As a player
  I want to be able to make a move when it's possible
  So I can play the game

  # 1
  Scenario: Call method render
    Given that makeMove is possible
    Then the board method render should be called
  # 2
  Scenario: Set currentPlayer to one
    Given the move was possible and that currentPlayer is one
    Then currentPlayer should be set to two
  # 3
  Scenario: Set currentPlayer to two
    Given the move was possible and that currentPlayer is two
    Then currentPlayer should be set to one
  # 4
  Scenario: Call tellTurn
    Given that the move was possible
    Then the tellTurn method should be called with the currentPlayer as argument
  # 5
  Scenario: Set playInProgress to false
    Given that the move is possible
    Then it should set playInProgress to false
  # 6
  Scenario: Return true
    Given that winCheck wasn't truthy
    Then in the end makeMove returns true
