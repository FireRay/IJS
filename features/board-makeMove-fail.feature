Feature: When making a move isn't possible
  As a player
  I want the game to stop me from making a move when it's not possible
  So I can play the game properly
  # 1
  Scenario: Wrong argument error
    Given that the method recieves an argument that isn't an integer between zero and six
    Then it should throw an error saying "column must be an integer between 0 and 6"
  # 2
  Scenario: Play is in progress
    Given that playInProgress is true
    Then makeMove should return null
  # 3
  Scenario: Column is full
    Given that the selected column is full
    Then it makeMove should return false

