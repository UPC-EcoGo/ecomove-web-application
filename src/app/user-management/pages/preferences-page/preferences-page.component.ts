import { Component, ViewEncapsulation} from '@angular/core';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";
import {NavbarComponent} from "../../../public/components/navbar/navbar.component";
import {FooterComponent} from "../../../public/components/footer/footer.component";

@Component({
  selector: 'app-preferences-page',
  standalone: true,
  imports: [
    MatSlideToggle,
    MatCardModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './preferences-page.component.html',
  styleUrl: './preferences-page.component.css'
})
export class PreferencesPageComponent {

}
