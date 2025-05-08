import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(), 
    provideAnimationsAsync(), 
    provideFirebaseApp(() => initializeApp({
      "projectId":"jojo-nails-milano-4e03a",
      "appId":"1:924756321590:web:7d4562aaeea17aaf29ff97",
      "storageBucket":"jojo-nails-milano-4e03a.firebasestorage.app",
      "apiKey":"AIzaSyDPsSKr9WsWuCdptIH3qheQd4b1-tZYAiA",
      "authDomain":"jojo-nails-milano-4e03a.firebaseapp.com",
      "messagingSenderId":"924756321590"})), 
      // provideAuth(() => getAuth()), 
      provideFirestore(() => getFirestore()),
    ],
};
