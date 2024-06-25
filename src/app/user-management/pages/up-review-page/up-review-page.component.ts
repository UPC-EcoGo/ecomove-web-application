import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormField, MatLabel, MatPrefix} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {Router, RouterLink} from "@angular/router";
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {MatIcon} from "@angular/material/icon";
import {NavbarComponent} from "../../../public/components/navbar/navbar.component";
import {FooterComponent} from "../../../public/components/footer/footer.component";

@Component({
  selector: 'app-up-review-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormField,
    MatButton,
    MatInput,
    MatIcon,
    MatLabel,
    MatPrefix,
    RouterLink,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './up-review-page.component.html',
  styleUrl: './up-review-page.component.css'
})
export class UpReviewPageComponent implements OnInit{
 user: any;

  constructor(private router: Router, private authService: SocialAuthService) {}
  ngOnInit() {
    this.getUser();
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  getUser() {
    const userString = localStorage.getItem('user');
    this.user = userString ? JSON.parse(userString) : null;
    console.log(this.user);
  }
}
