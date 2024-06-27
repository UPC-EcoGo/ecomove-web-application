import { UsersService } from "./../../services/users/users.service";
import {Component, OnInit} from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
import {MatButton} from "@angular/material/button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-facebook-register',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './facebook-register.component.html',
  styleUrl: './facebook-register.component.css'
})
export class FacebookRegisterComponent implements OnInit {
  constructor(private authService: SocialAuthService, private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      console.log(user);
      if (user) {
        this.usersService.getUsers().subscribe((data: any) => {
          const existingUser = data.find((u: any) => u.email === user.email);
          if (!existingUser) {
            const newUser = { username: user.name, email: user.email, firstName: user.name, lastName: 'socialAccount', password: 'socialAccount'  };
            localStorage.setItem('user', JSON.stringify(newUser));
            this.usersService.registerUser(newUser).subscribe(() => { });
          } else {
            localStorage.setItem('user', JSON.stringify(existingUser));
          }
          this.router.navigateByUrl('/home');
          return null;
        });

      }
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
