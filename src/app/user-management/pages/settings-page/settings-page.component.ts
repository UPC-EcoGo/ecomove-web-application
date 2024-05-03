import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { NavbarComponent } from '../../../public/components/navbar/navbar.component';
import { FooterComponent } from '../../../public/components/footer/footer.component';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [MatIcon, RouterLink, MatButton, NavbarComponent, FooterComponent],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css'
})

export class SettingsPageComponent implements OnInit {
  user: any;

  constructor(private router: Router, private authService: SocialAuthService) {}

  ngOnInit() {
    this.getUser();
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  getUser() {
    const userString = localStorage.getItem('user');
    this.user = userString ? JSON.parse(userString) : null;
    console.log(this.user);
  }

  signOut() {
    this.authService.signOut();
    setTimeout(() => {
    localStorage.removeItem('user');
    
    this.router.navigate(['/login']);
    }, 1000);
  }
}
