Feature: The Game class win
  The user shall during the game be informed
  by a visual display who has won or if the Game
  is a draw. Furthermore a play again button should also
  be displayed.

  # 1
  Scenario: The methods inargument
    Given that the methods recives an invalid argument
    Then an error message ‘won must be “draw”, 1 or 2’ be thrown
  # 2
  Scenario: Display winner or draw
    Given that the game has finished
    Then a message displaying who the winner was or if it was a draw

  #3
  Scenario: Button play again
    Given that the method has a button
    Then the button should display 'Spela igen' when it's pressed