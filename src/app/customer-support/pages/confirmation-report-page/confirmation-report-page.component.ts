import { Component } from '@angular/core';
import {FooterComponent} from "../../../public/components/footer/footer.component";
import {NavbarComponent} from "../../../public/components/navbar/navbar.component";

@Component({
  selector: 'app-confirmation-report-page',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './confirmation-report-page.component.html',
  styleUrl: './confirmation-report-page.component.css'
})
export class ConfirmationReportPageComponent {

}
