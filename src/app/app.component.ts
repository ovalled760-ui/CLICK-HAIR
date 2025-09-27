import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CLICK-HAIR';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    
    setInterval(() => {
      this.authService.checkInactivityLimit();
    }, 5000);
  }


  @HostListener('document:mousemove')
  @HostListener('document:keydown')
  onUserActivity(): void {
    this.authService.updateActivityTime();
  }
}
