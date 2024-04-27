Feature: Show/Hide Event Details



    Scenario: Details of events are hidden when page is opened
    Given application has been opened
    When the application is displaying events
    Then the details of all hidden events should not be displayed

    Scenario: show details button is clicked
    Given the desired event displays the show details button
    When the user clicks the button
    Then the details of the event should be displayed

    Scenario: hide details is clicked
    Given the event details are being displayed
    When the hide details button is clicked
    Then the details of the event should be hidden