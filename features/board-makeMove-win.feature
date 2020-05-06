Feature: When calling on makeMove with a winner
  As a player
  I want to be able to see if someone won
  So I can celebrate
  # 1
  Scenario: Call removeEventListener
    Given that method winCheck returns something truthy
    Then makeMove should call removeEventListener
  # 2
  Scenario: winCheck returns an object with combo
    Given that winCheck returns an object with a combo attribute
    Then the markWin method should be called with the combo value as argument
    And winCheck should return true
  # 3
  Scenario: Call Game method over
    Given that winCheck returns an object with a winner attribute
    Then the over method should be called with winner value as argument
    And winCheck should return true