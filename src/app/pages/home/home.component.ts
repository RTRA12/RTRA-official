import { Component } from '@angular/core';
import { EventBoardComponent } from '../../components/event-board/event-board.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import {
    Firestore,
    collection,
    where,
    getDocs,
    query,
    limit,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EventBoardComponent, HeroSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
    constructor(private firestore: Firestore) {}
    eventsCollection = collection(this.firestore, 'events');
    events: any[] = [];
    async ngOnInit() {
        const eventsQuery = query(this.eventsCollection, where('category', '==', 'upcoming'), limit(3));
        const querySnapshot = await getDocs(eventsQuery);
        querySnapshot.forEach((doc) => {
            this.events.push(doc.data());
        });
    }
}
