import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';


const feature = loadFeature('./src/features/specNumEvents.feature');

defineFeature(feature, test => {
    test('The default events specified should be 32',({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;
    let EventListItems;
    given('application has been opened', ()=>{
        AppComponent = render(<App />);
    });

    when('the application is displaying events',async() =>{
        
        AppDOM = AppComponent.container.firstChild;
        EventListDOM  = AppDOM.querySelector('#event-list');
        await waitFor(() => {
            EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(32);
        });

    });

    then('there should be 32 events displayed', async() =>{
        expect(EventListItems.length).toBe(32);
    });
    });


    test('The user wants to see a non defualt amount of events',({given,when,then}) =>{
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        let enteredEvents;
        given('application has been opened',() =>{
            AppComponent = render(<App />);
        });

        when('the user enters a value other than 32 and events are being displayed',async() =>{
            AppDOM = AppComponent.container.firstChild;
            enteredEvents = within(AppDOM.querySelector('#number-of-events')).queryAllByRole('textbox');
            const user = userEvent.setup();
            await user.type(enteredEvents);
            EventListDOM  = AppDOM.querySelector('#event-list');
        });

        then('the entered number of events should be displayed',()=>{
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(enteredEvents);
        });
    });

});