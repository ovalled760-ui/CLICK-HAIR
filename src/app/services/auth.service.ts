import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'token';
  private activityKey = 'lastActivity';

  constructor(private router: Router) {}

  login(usuario: string, password: string): boolean {
    if (usuario  && password ) {
      localStorage.setItem(this.tokenKey, 'fake-token');
      this.updateActivityTime();
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.activityKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  updateActivityTime(): void {
    localStorage.setItem(this.activityKey, Date.now().toString());
  }

  checkInactivityLimit(): void {
    const last = localStorage.getItem(this.activityKey);
    const now = Date.now();

    if (last && now - parseInt(last, 10) > 60_000) { 
      this.logout(); 
    }
  }
}
