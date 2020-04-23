Feature: Call methods in constructor
  As a gamer
  I want the constructor to call on the methods
  So I can play the game.

  # 1
  Scenario: The game calls on 2 methods
    Given that the game starts
    Then the constructor should first call addEventListener
    And the constructor should call start

