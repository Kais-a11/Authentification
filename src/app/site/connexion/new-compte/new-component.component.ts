import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  creerCompte() {
    this.authService.createNewUser(this.email, this.password).then(
      () => {
        console.log('Compte créé avec succès');
        alert('Compte créé avec succès');
        this.authService.isAuth = true;
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log('Échec de la création du compte ' + error);
        alert('Nous n\'avons pas pu créer votre compte' + '\n' + error);
      }
    );
  }
}
