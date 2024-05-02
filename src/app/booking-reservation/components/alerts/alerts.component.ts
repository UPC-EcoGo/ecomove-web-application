import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-alerts',
  standalone: true,
    imports: [
        MatCard
    ],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {

}
