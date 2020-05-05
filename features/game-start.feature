Feature: Starting the game
  As a player
  I want to be able to start a game
  So I can play with my friends

  Scenario: Creating a board
    Given a game is being started
    Then the Game.start() method should create a new board stored in this.board