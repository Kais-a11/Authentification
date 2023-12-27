import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userEmail?:string;
  isAuth:boolean=false;
  constructor( private authService:AuthService)
  {

  }

  OnSignOut() {
    this.authService.signOutUser();
  }
  ngOnInit(): void {
      firebase.auth().onAuthStateChanged(
        (user)=>{
          if (user) {
            this.userEmail = user.email || ''; // Si user.email est null, assigner une chaîne vide
            this.isAuth = true;
          } else {
            this.userEmail = ''; // Si l'utilisateur est null, assigner une chaîne vide
            this.isAuth = false;
          }
        }
      );
  }
 }

