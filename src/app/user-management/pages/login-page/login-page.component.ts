import { Component } from '@angular/core';
import {LoginFormComponent} from "../../components/login-form/login-form.component";
import {GoogleRegisterComponent} from "../../components/google-register/google-register.component";
import {FacebookRegisterComponent} from "../../components/facebook-register/facebook-register.component";
import {FooterComponent} from '../../../public/components/footer/footer.component';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    LoginFormComponent,
    GoogleRegisterComponent,
    FacebookRegisterComponent,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent {}
