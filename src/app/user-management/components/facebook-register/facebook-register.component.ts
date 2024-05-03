import { UsersService } from "./../../services/users/users.service";
import {Component, OnInit} from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
import {MatButton} from "@angular/material/button";

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
  constructor(private authService: SocialAuthService, private usersService: UsersService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      
      this.usersService.getUsers().subscribe((data: any) => {
        if (data.filter((u:any) => u.email === user.email).length === 0) {
          const newUser = {id: String(data.length + 1), email: user.email, firstname: user.name};
          localStorage.setItem('user', JSON.stringify(newUser));
          this.usersService.registerUser(newUser).subscribe((data) => {  });
        }
        else {
          localStorage.setItem('user', JSON.stringify(data.filter((u:any) => u.email === user.email)[0]));
        }
      });
      if(user) {
        window.location.href = '/home';
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
