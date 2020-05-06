Feature: The Game class win
  The user shall during the game be informed
  by a visual display who has won or if the Game
  is a draw. Furthermore a play again button should also
  be displayed.

  # 1
  Scenario: The methods inargument
    Given that the methods recives an invalid argument
    Then an error message "won must be “draw”, 1 or 2" be thrown

  # 2
  Scenario: Display draw
    Given that the game has ended as draw
    Then a message displaying “Det blev oavgjort!”

  Scenario: Display winner red
    Given that the game has finished and red has won
    Then a message displaying the winner Röd vann!

  Scenario: Display winner yellow
    Given that the game has finished and yellow has won
    Then a message displaying the winner Gul vann!

  #3
  Scenario: Button play again
    Given that the game is over
    Then the .message element should have a button with the class again