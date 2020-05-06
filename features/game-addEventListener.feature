Feature: Notification when a button in clicked
  As a Connect 4 player user
  I want to know when I have clicked a button
  So I know that I can play.

  # 1
  Scenario: Clicked a button
    Given that the method addEventListeners has an EventListener with a click event
    Then the start method should be called.