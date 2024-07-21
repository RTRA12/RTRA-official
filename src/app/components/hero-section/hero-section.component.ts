import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth, user, signInWithPopup } from '@angular/fire/auth';
import {
    Firestore,
    collection,
    addDoc,
    where,
    getDocs,
    query,
    updateDoc,
} from '@angular/fire/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

interface User {
    name: string;
    email: string;
    createdAt: Date;
    lastSignIn: Date;
}

@Component({
    selector: 'app-hero-section',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
    private auth: Auth = inject(Auth);
    private firestore: Firestore = inject(Firestore);
    user = user(this.auth);
    usersCollection = collection(this.firestore, 'users');
    adminsCollection = collection(this.firestore, 'admins');

    isAdmin: boolean = false;

    ngOnInit() {}

    async login() {
        signInWithPopup(this.auth, new GoogleAuthProvider())
            .then(async (result) => {
                this.user = result.user;
                const userQuery = query(
                    this.usersCollection,
                    where('email', '==', this.user.email)
                );
                const querySnapshot = await getDocs(userQuery);
                if (querySnapshot.empty && result.user.emailVerified) {
                    addDoc(this.usersCollection, {
                        name: result.user.displayName,
                        email: result.user.email,
                        createdAt: result.user.metadata.creationTime,
                        lastSignIn: result.user.metadata.lastSignInTime,
                    });
                } else {
                    querySnapshot.forEach((doc) => {
                        updateDoc(doc.ref, {
                            lastSignIn: result.user.metadata.lastSignInTime,
                        });
                    });
                }

                const adminQuery = query(
                    this.adminsCollection,
                    where('email', '==', result.user.email)
                );
                const adminQuerySnapshot = await getDocs(adminQuery);
                if (!adminQuerySnapshot.empty) {
                    this.isAdmin = true;
                }
            })
            .catch((error) => {
                console.error('Redirect error', error);
            });
    }
}
