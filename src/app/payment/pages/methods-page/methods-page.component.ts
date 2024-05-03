import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {NavbarComponent} from "../../../public/components/navbar/navbar.component";

@Component({
  selector: 'app-methods-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardImage,
    NavbarComponent
],
  templateUrl: './methods-page.component.html',
  styleUrl: './methods-page.component.css'
})
export class MethodsPageComponent {

}
