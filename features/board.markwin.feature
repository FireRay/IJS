Feature: Check if a player has won

    Scenario: The method should check if a player has won
        Given that one of the players has won
        When the method markWin(combo) recieves the argument combo
        Then adds the css-class win to each one of the div-element.

