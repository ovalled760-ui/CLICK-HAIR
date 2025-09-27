import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(loginForm: NgForm) {
    if (!loginForm.valid) return;

    if (this.authService.login(this.usuario, this.password)) {
      this.router.navigate(['/click']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
