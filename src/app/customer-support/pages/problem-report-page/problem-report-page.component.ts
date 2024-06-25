import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {NavbarComponent} from "../../../public/components/navbar/navbar.component";
import {FooterComponent} from "../../../public/components/footer/footer.component";

@Component({
  selector: 'app-problem-report-page',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInput,
    MatButton,
    RouterLink,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './problem-report-page.component.html',
  styleUrl: './problem-report-page.component.css'
})
export class ProblemReportPageComponent {

}
