import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {NavbarComponent} from "../../../public/components/navbar/navbar.component";

@Component({
  selector: 'app-payment-methods',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardImage,
        NavbarComponent
    ],
  templateUrl: './payment-methods.component.html',
  styleUrl: './payment-methods.component.css'
})
export class PaymentMethodsComponent {

}
