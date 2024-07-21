import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CustomEvent {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    timings: string;
}

@Component({
    selector: 'app-event-card',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './event-card.component.html',
    styleUrl: './event-card.component.css',
})
export class EventCardComponent {
    @Input() event!: CustomEvent;
}
