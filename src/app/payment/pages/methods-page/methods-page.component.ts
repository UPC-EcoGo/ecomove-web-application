import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {NavbarComponent} from "../../../public/components/navbar/navbar.component";

import {FooterComponent} from "../../../public/components/footer/footer.component";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-methods-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardImage,
    NavbarComponent,
    FooterComponent,
    RouterLink
  ],

  templateUrl: './methods-page.component.html',
  styleUrl: './methods-page.component.css'
})
export class MethodsPageComponent {

}
