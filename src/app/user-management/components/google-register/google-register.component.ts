import { UsersService } from "./../../services/users/users.service";
import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleSigninButtonModule} from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

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
    private socialAuthService: SocialAuthService, private usersService: UsersService, private router: Router
  ) { }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      if (user) {
        this.usersService.getUsers().subscribe((data: any) => {
          const existingUser = data.find((u: any) => u.email === user.email);
          if (!existingUser) {
            const newUser = { id: String(data.length + 1), email: user.email, firstname: user.name };
            localStorage.setItem('user', JSON.stringify(newUser));
            this.usersService.registerUser(newUser).subscribe(() => { });
          } else {
            localStorage.setItem('user', JSON.stringify(existingUser));
          }
        });
        this.router.navigate(['/home']);
      }
    });
  }
}
