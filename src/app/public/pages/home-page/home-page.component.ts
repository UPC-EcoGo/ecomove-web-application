import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatCardModule, RouterLink, MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
