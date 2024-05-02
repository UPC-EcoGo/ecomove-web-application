import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './public/components/navbar/navbar.component';
import {PaymentMethodsComponent} from "./payment/components/payment-methods/payment-methods.component";
import {FooterComponent} from "./public/components/footer/footer.component";
import {ConfirmationSaveCardComponent} from "./payment/components/confirmation-save-card/confirmation-save-card.component";
import {InputCardComponent} from "./payment/components/input-card/input-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PaymentMethodsComponent, FooterComponent, ConfirmationSaveCardComponent, InputCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ecomove-web-application';
}
