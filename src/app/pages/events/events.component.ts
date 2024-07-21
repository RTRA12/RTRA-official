import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventCardComponent } from '../../components/event-card/event-card.component';

interface Tabs{
    upcoming:boolean;
    past:boolean

}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule,EventCardComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
    activeTab :boolean = true;// true->upcoming ; false->past
    Upcomingevents = [
        {
            id:'1',
            title: 'Upcoming ipsum',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: '2021-01-01',
            location: 'Location 1',
            tag: 'Education',
            timings: '10:00 AM - 12:00 PM'
        },
        {
            id:'2',
            title: 'upcoming Event 2',
            description: 'This is the second event',
            date: '2021-01-02',
            location: 'Location 2',
            tag: 'Competition',
            timings: '02:00 PM - 04:00 PM'
        },
        {
            id:'3',
            title: 'upcoming Event 3',
            description: 'This is the third event',
            date: '2021-01-03',
            location: 'Location 3',
            tag: 'Entertainment',
            timings: '06:00 PM - 08:00 PM'
        },
        {
            id:'11',
            title: 'Upcoming ipsum',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: '2021-01-01',
            location: 'Location 1',
            tag: 'Education',
            timings: '10:00 AM - 12:00 PM'
        },
        {
            id:'21',
            title: 'upcoming Event 2',
            description: 'This is the second event',
            date: '2021-01-02',
            location: 'Location 2',
            tag: 'Competition',
            timings: '02:00 PM - 04:00 PM'
        },
        {
            id:'31',
            title: 'upcoming Event 3',
            description: 'This is the third event',
            date: '2021-01-03',
            location: 'Location 3',
            tag: 'Entertainment',
            timings: '06:00 PM - 08:00 PM'
        }
    ];


    Pastevents = [
        {
            id:'4',
            title: 'Past ipsum',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: '2021-01-01',
            location: 'Location 1',
            tag: 'Education',
            timings: '10:00 AM - 12:00 PM'
        },
        {
            id:'5',
            title: 'Past Event 2',
            description: 'This is the second event',
            date: '2021-01-02',
            location: 'Location 2',
            tag: 'Competition',
            timings: '02:00 PM - 04:00 PM'
        },
        {
            id:'6',
            title: 'Past Event 3',
            description: 'This is the third event',
            date: '2021-01-03',
            location: 'Location 3',
            tag: 'Entertainment',
            timings: '06:00 PM - 08:00 PM'
        }
    ];
};
