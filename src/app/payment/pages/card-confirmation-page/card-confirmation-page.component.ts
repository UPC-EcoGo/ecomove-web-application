import { Component } from '@angular/core';
import {NavbarComponent} from "../../../public/components/navbar/navbar.component";
import {FooterComponent} from "../../../public/components/footer/footer.component";

@Component({
  selector: 'app-card-confirmation-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './card-confirmation-page.component.html',
  styleUrl: './card-confirmation-page.component.css'
})
export class CardConfirmationPageComponent {

}
