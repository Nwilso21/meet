User stories
  - As a user, I should be able to show and hide my event details, so that I have quick and concise access to the neccesary information of event
  - As a user, I should be able to specify my number of events, so I may see the amount of events I desire and to not be overhwelmed by the information
  - As a user, I should be able to use the app when offline, so I may use the app when I dont have a network connection
  - As a user, I should be able to add an app shortcut to the homescreen, So I can have easy and fast access to the application
  - As a user, I should be able to display charts showing event details, so I can see the relevant information in an easy to read manner

Gherkin
  1) Scenario : user can filter events by city
     - given the list of events has been loaded
     - when a user enters a city name
     - then the events upcoming in that city will be listed
  2)Scenario : User can expand an event to see its details
      - given the list of events has been loaded
      - when user clicks on show details button for an event
      - then the vent element will be expanded to show details
  3)Scenario : User can specify a number of events
      - given the list of events for a city is loaded
      - when the user enters the amount of results they want to see
      - given number of entries will be displayed in the list
  4)Scenario : User can access app offline
      - given the app is properly running and initialized
      - the user can open and use app while not connected
      - then the app will run seamlessly with no active connection
  5)Scenario : User can add an app shortcut to homescreen
      - given the app is properly running and initialized
      - the user can add a shortcut to their homescreen
      - then the app will open on shortcut press with no url or typing needed
  6)Scenario : User can display charts about details
      - given the event details have been loaded
      - the user can press a show details button
      - then the charts will be displayed alongside the oether details
