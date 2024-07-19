import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    Auth,
    user,
    signInWithPopup,
} from '@angular/fire/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
    selector: 'app-hero-section',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
    private auth: Auth = inject(Auth);
    user = user(this.auth);

    constructor() {}

    ngOnInit() {
        this.auth.onAuthStateChanged((user) => {
            if (user) {
                console.log('User is signed in');
                this.user = user;
            } else {
                console.log('User is signed out');
                this.user = null;
            }
        });
    }

    async login() {
        signInWithPopup(this.auth, new GoogleAuthProvider())
            .then((result) => {
            })
            .catch((error) => {
                console.error('Redirect error', error);
            });
    }
}
