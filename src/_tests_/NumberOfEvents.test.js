import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from "../components/NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setNumberOfEvents={() => { }} />);
  })

  test(" elements with'textbox' are added", () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(numberTextBox).toBeInTheDocument();
  });

  test('32 events get rendered', () => {
    expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue('32');
  });

  test('number changes when user enters', async () => {
    const numberOfEvents = NumberOfEventsComponent.queryByRole('textbox');
    const user = userEvent.setup();
    await user.type(numberOfEvents, '{backspace}{backspace}10');
    expect(numberOfEvents).toHaveValue('10');
  });

})