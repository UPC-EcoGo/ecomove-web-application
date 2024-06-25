import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {FooterComponent} from "../../../public/components/footer/footer.component";
import {NavbarComponent} from "../../../public/components/navbar/navbar.component";

@Component({
  selector: 'app-input-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormField,
    MatIcon,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './input-card.component.html',
  styleUrl: './input-card.component.css'
})
export class InputCardComponent {

}
