import { Injectable } from "@angular/core";
import firebase from 'firebase/compat/app'; // Modifier l'importation
import 'firebase/compat/auth'; // Ajouter les fonctionnalités dont vous avez besoin

@Injectable()
export class AuthService {
    isAuth: boolean = false;

    constructor()
    {
        if (!firebase.apps.length)
        {
            firebase.initializeApp({
                apiKey: "AIzaSyD_kARo4dFAtVpB_rMgOoM8_BDGM4DCT8I",
                authDomain: "angularfirebase-4960a.firebaseapp.com",
                projectId: "angularfirebase-4960a",
                storageBucket: "angularfirebase-4960a.appspot.com",
                messagingSenderId: "463414948335",
                appId: "1:463414948335:web:497e3397d14691014dc61a",
                measurementId: "G-07ZC82E6YW"
            })
        }
    }

    createNewUser(email: string, password: string) {
        return new Promise<void>((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    resolve();
                })
                .catch((error: any) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('Pb de création de nouveau compte' + errorCode + errorMessage);
                    reject(error);
                });
        });
    }

    signInUser(email: string, password: string) {
        return new Promise<void>((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    this.isAuth = true;
                    resolve();
                })
                .catch((error: any) => {
                    this.isAuth = false;
                    reject(error);
                });
        });
    }

    signOutUser() { 
        this.isAuth = false;
        firebase.auth().signOut();
    }
}
