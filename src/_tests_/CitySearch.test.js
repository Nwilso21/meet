

import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';
import App from '../App';
import { extractLocations, getEvents } from '../api';

describe('<CitySearch /> component', () => {
  let CitySearchComponent;
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch
      allLocations={[]}
      setCurrentCity={() => { }}
      setInfoAlert={() => { }}
    />);
  });

  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('renders correct number of events', async () => {
    const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });

  describe('<CitySearch /> integration', () => {
    test('renders suggestions list when the app is rendered.', async () => {
      const user = userEvent.setup();
      const AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
  
      const CitySearchDOM = AppDOM.querySelector('#city-search');
      const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
      await user.click(cityTextBox);
  
      const allEvents = await getEvents();
      const allLocations = extractLocations(allEvents);
  
      const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
      expect(suggestionListItems.length).toBe(allLocations.length + 1);
   });
  });
});