Feature: The game should say who's turn it is
  As a player
  I want to know who's turn it is
  So the right player makes a move

  # 1
  Scenario: Error message
    Given the taken argument is not one or two
    Then it should throw player must be 1 or 2
  # 2
  Scenario: Yellows turn
    Given that it is yellows turn
    Then the .message element should display Guls tur...
  # 3
  Scenario: Reds turn
    Given that it is reds turn
    Then the .message element should display Röds tur...

