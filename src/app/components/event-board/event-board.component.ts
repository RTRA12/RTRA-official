import { Component, ElementRef, Input } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card.component';
import { RouterLink } from '@angular/router';

interface CustomEvent {
    id:string
    title: string;
    description: string;
    date: string;
    location: string;
    timings: string;
}

@Component({
    selector: 'app-event-board',
    standalone: true,
    imports: [EventCardComponent,RouterLink],
    templateUrl: './event-board.component.html',
    styleUrl: './event-board.component.css',
})
export class EventBoardComponent {
    constructor(private document: ElementRef) {}
    @Input() events!: CustomEvent[];
    @Input() category!: string;
    ngOnInit() {
        this.document.nativeElement.querySelector(
            '.eventBoard'
        ).style.width = `calc(${this.events.length * 500 + 'px'} + 3rem)`;
    }
}
