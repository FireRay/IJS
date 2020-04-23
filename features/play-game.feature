Feature: Play Connect 4
  As a poor Connect 4 player
  I want to play the game on my screen with my friends
  So that I don't need to buy it.

  # Some random scenarios (out of the many needed)
  # (these have no When - but there will be plenty that have)

  # 1
  Scenario: A new Game creates a new board
    Given that a new Game is created
    Then it should create a new Board

  # 2
  Scenario: A board adds 42 divs to the .board element
    Given that a new Board is created
    Then it should render 42 divs as children of the board element


  # 4
  Scenario: The player argument must be equal to 1 or 2
    Given that a game is still in play
    Then player must equal 1 or 2


