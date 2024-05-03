import { Component } from '@angular/core';
import {RegisterFormComponent} from "../../components/register-form/register-form.component";
import {GoogleRegisterComponent} from "../../components/google-register/google-register.component";
import {FacebookRegisterComponent} from "../../components/facebook-register/facebook-register.component";
import { FooterComponent } from '../../../public/components/footer/footer.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    RegisterFormComponent,
    GoogleRegisterComponent,
    FacebookRegisterComponent,
    FooterComponent
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent { }
