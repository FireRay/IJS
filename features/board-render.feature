Feature: Rendering the board
  As a non-blind player
  I want to be able to see the board
  so I can play the game

  Scenario: The DOM element class = board
    Given that a game is in play
    Then the DOM element .board should have fortytwo divs in it

  Scenario: Correct brick on spot
    Given that a player has a brick on a spot
    Then the div on that spot should have the class representing the player

  Scenario: Div in each div
    Given that the board has fortytwo divs in it
    Then each of those divs should have an empty div in them







