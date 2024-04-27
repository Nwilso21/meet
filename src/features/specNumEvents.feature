Feature: Specify Number of events



    Scenario: The default events specified should be 32
     Given application has been opened
     When the application is displaying events
     Then there should be 32 events displayed

    Scenario: The user wants to see a non defualt amount of events
     Given application has been opened
     When the user enters a value other than 32 and events are being displayed
     Then the entered number of events should be displayed




