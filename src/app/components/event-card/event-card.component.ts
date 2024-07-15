import { Component, Input } from '@angular/core';

interface CustomEvent {
    title: string;
    description: string;
    date: string;
    location: string;
    tag: string;
    timings: string;
};

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
    @Input() event!: CustomEvent;
}
