import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  seConnecter(email: string, pass: string) {
    this.authService.signInUser(email, pass).then(
      () => {
        alert('Bienvenue ' + email);
        this.router.navigate(['/films']);
      },
      (error) => {
        console.log('Pb de connexion ' + error);
        alert('Votre compte est incorrect');
      }
    );
  }
}
