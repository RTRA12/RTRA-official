import { Component } from '@angular/core';
import { EventBoardComponent } from '../../components/event-board/event-board.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';

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
            title: 'Event 1',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: '2021-01-01',
            location: 'Location 1'
        },
        {
            title: 'Event 2',
            description: 'This is the second event',
            date: '2021-01-02',
            location: 'Location 2'
        },
        {
            title: 'Event 3',
            description: 'This is the third event',
            date: '2021-01-03',
            location: 'Location 3'
        },
        {
            title: 'Event 4',
            description: 'This is the fourth event',
            date: '2021-01-04',
            location: 'Location 4'
        },
        {
            title: 'Event 5',
            description: 'This is the fifth event',
            date: '2021-01-05',
            location: 'Location 5'
        },
        {
            title: 'Event 6',
            description: 'This is the sixth event',
            date: '2021-01-06',
            location: 'Location 6'
        },
        {
            title: 'Event 7',
            description: 'This is the seventh event',
            date: '2021-01-07',
            location: 'Location 7'
        },
        {
            title: 'Event 8',
            description: 'This is the eighth event',
            date: '2021-01-08',
            location: 'Location 8'
        },
        {
            title: 'Event 9',
            description: 'This is the ninth event',
            date: '2021-01-09',
            location: 'Location 9'
        },
        {
            title: 'Event 10',
            description: 'This is the tenth event',
            date: '2021-01-10',
            location: 'Location 10'
        }
    ];
}
