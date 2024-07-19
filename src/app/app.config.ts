import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
    getAnalytics,
    provideAnalytics,
    ScreenTrackingService,
    UserTrackingService,
} from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideClientHydration(),
        provideFirebaseApp(() =>
            initializeApp({
                projectId: 'rtra-demo',
                appId: '1:1039398199141:web:032bad960a870f8f18cb8c',
                storageBucket: 'rtra-demo.appspot.com',
                apiKey: 'AIzaSyAg67hc7U9D7Mtl6dz6CP3lUher-8i8kDM',
                authDomain: 'rtra-demo.firebaseapp.com',
                messagingSenderId: '1039398199141',
                measurementId: 'G-62M02ZZK3C',
            })
        ),
        provideAuth(() => getAuth()),
        provideAnalytics(() => getAnalytics()),
        ScreenTrackingService,
        UserTrackingService,
        provideFirestore(() => getFirestore()),
    ],
};
