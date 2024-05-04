import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {NavbarComponent} from "../../../public/components/navbar/navbar.component";
import { FooterComponent } from '../../../public/components/footer/footer.component';

@Component({
  selector: 'app-methods-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardImage,
    NavbarComponent,
    FooterComponent
],
  templateUrl: './methods-page.component.html',
  styleUrl: './methods-page.component.css'
})
export class MethodsPageComponent {

}