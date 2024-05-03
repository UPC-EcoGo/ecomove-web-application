import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { NavbarComponent } from '../../../public/components/navbar/navbar.component';
import { FooterComponent } from '../../../public/components/footer/footer.component';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [MatIcon, RouterLink, MatButton, NavbarComponent, FooterComponent],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css'
})

export class SettingsPageComponent implements OnInit {
  user: any;

  ngOnInit() {
    this.getUser();
    if (!this.user) {
      window.location.href = '/login';
    }
  }

  getUser() {
    const userString = localStorage.getItem('user');
    this.user = userString ? JSON.parse(userString) : null;
    console.log(this.user);
  }

  signOut() {
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
}
