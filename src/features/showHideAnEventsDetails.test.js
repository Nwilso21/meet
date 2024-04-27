import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventDetails.feature');


defineFeature(feature, test => {



    test('Details of events are hidden when page is opened', ({ given, when, then }) => {
        let AppComponent;
        given('application has been opened', () => {
            AppComponent = render(<App />);
        });

        when('the application is displaying events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM  = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        then('the details of all hidden events should not be displayed', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });


    

    test('show details button is clicked', ({ given, when, then }) => {
        let AppComponent;
        given('the desired event displays the show details button', async () => {
            AppComponent = render(<App />);

        });

        when('the user clicks the button', async () => {
            const showDetails = AppComponent.queryByText("Show Details");
            await userEvent.click(showDetails);
        });

        then('the details of the event should be displayed', () => {
            const AppDOM = AppComponent.container.firstChild;
            const details = AppDOM.querySelector('.details');
            expect(details).toBeInTheDocument;
        })
    });


    

    test('hide details is clicked', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        given('the event details are being displayed', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            const details = AppDOM.querySelector('.details');
            expect(details).toBeInTheDocument;
        });

        when('the hide details button is clicked', async () => {
            const hideDetails = AppComponent.queryByText('hide details');
            await userEvent.click(hideDetails);
        });

        then('the details of the event should be hidden', () => {
            const details = AppDOM.querySelector('.details');
            expect(details).not.toBeInTheDocument;
        });
    });
});

        
    