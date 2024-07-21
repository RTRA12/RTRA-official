import { Component } from '@angular/core';
import { EventBoardComponent } from '../../components/event-board/event-board.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EventBoardComponent, HeroSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    events = [
        {
            id:'1234556',
            title: 'lorem ipsum',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: '2021-01-01',
            location: 'Location 1',
            tag: 'Education',
            timings: '10:00 AM - 12:00 PM'
        },
        {
            id:'1234556',
            title: 'Event 2',
            description: 'This is the second event',
            date: '2021-01-02',
            location: 'Location 2',
            tag: 'Competition',
            timings: '02:00 PM - 04:00 PM'
        },
        {
            id:'1234556',
            title: 'Event 3',
            description: 'This is the third event',
            date: '2021-01-03',
            location: 'Location 3',
            tag: 'Entertainment',
            timings: '06:00 PM - 08:00 PM'
        }
    ];
}
