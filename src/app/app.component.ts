import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './public/components/navbar/navbar.component';
import { SettingsPageComponent } from './user-management/components/settings-page/settings-page.component';
import { ConfirmationRegisterPageComponent } from './user-management/components/confirmation-register-page/confirmation-register-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SettingsPageComponent, ConfirmationRegisterPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ecomove-web-application';
}
