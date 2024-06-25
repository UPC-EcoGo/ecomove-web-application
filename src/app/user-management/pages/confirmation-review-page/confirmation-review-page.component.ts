import { Component } from '@angular/core';
import {FooterComponent} from "../../../public/components/footer/footer.component";
import {NavbarComponent} from "../../../public/components/navbar/navbar.component";

@Component({
  selector: 'app-confirmation-review-page',
  standalone: true,
    imports: [
        FooterComponent,
        NavbarComponent
    ],
  templateUrl: './confirmation-review-page.component.html',
  styleUrl: './confirmation-review-page.component.css'
})
export class ConfirmationReviewPageComponent {

}
