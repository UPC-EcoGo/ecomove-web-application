import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

import { NavbarComponent } from '../../../public/components/navbar/navbar.component';
import { FooterComponent } from '../../../public/components/footer/footer.component';


@Component({
  selector: 'app-support-page',
  standalone: true,
  imports: [MatCard, NavbarComponent, FooterComponent],
  templateUrl: './support-page.component.html',
  styleUrl: './support-page.component.css'
})
export class SupportPageComponent {

}
