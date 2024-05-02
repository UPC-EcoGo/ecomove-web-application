import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-up-review-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    MatFormField,
    MatInput
  ],
  templateUrl: './up-review-page.component.html',
  styleUrl: './up-review-page.component.css'
})
export class UpReviewPageComponent {

}
