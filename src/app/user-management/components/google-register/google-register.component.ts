import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleSigninButtonModule} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-google-register',
  standalone: true,
  imports: [
    GoogleSigninButtonModule
  ],
  templateUrl: './google-register.component.html',
  styleUrls: ['./google-register.component.css']
})
export class GoogleRegisterComponent implements OnInit {

  constructor(
    private socialAuthService: SocialAuthService
  ) { }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      if (user) {
        window.location.href = '/home';
      }
    });
  }
}
