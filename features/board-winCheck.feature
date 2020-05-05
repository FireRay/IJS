Feature: A method that checks if the board has won
  As a competetive connect 4 player
  I want to know if someone has won
  So I crush my enemies
  # 1
  Scenario: There is a winner
    Given that the player 1 or 2 has won
    Then winCheck() returns an object with the winner and combo attribute
  # 2
  Scenario: Winner is 1 or 2
    Given that someone has won
    Then the winner attribute of the winCheck() return value should be 1 or 2
  # 3
  Scenario: The game ties
    Given that the outcome of the game is a tie
    Then the winner attribute of the winCheck() return value should be 'draw'
  # 4
  Scenario: The game is still going on
    Given that neither of player 1 or 2 wins or the game is a draw
    Then winCheck() should return the value false