import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { NavbarComponent } from '../../../public/components/navbar/navbar.component';
import { FooterComponent } from '../../../public/components/footer/footer.component';

@Component({
  selector: 'app-alerts-page',
  standalone: true,
  imports: [MatCard, NavbarComponent, FooterComponent],
  templateUrl: './alerts-page.component.html',
  styleUrl: './alerts-page.component.css'
})
export class AlertsPageComponent {

}
