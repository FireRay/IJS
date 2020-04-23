

Feature: Display message
  As a Conncet 4 player
  I want to know what's going on in the game
  So I know what I should do next.

  # 3
  Scenario: The .message element should display who's turn it is
    Given that a game is still in play
    Then the .message element should display a text of who's turn it is

  # 5
  Scenario: Draw message
    Given that the game ends in a draw
    Then the .message element displays `Det blev oavgjort!`

  # 6
  Scenario: Red wins message
    Given that red has won
    Then the .message element displays `Röd vann!`

  # 7
  Scenario: Yellow wins message
    Given that yellow has won
    Then the .message element displays `Gul vann!`