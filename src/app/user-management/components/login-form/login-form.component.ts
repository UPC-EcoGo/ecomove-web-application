import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge } from 'rxjs';
import { UsersService } from '../../services/users/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  username = new FormControl('', [Validators.required, Validators.minLength(4)]);
  password = new FormControl('', [Validators.required, Validators.minLength(4)]);

  usernameErrorMessage = '';
  passwordErrorMessage = '';

  constructor(private usersService: UsersService, private router: Router) {
    merge(this.username.statusChanges, this.username.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateUsernameErrorMessage());

    merge(this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updatePasswordErrorMessage());
  }

  updateUsernameErrorMessage() {
    this.usernameErrorMessage = this.username.hasError('required') ? 'Debes ingresar un valor' :  '';
  }

  updatePasswordErrorMessage() {
    this.passwordErrorMessage = this.password.hasError('required') ? 'Debes ingresar un valor' :  '';
  }

  logIn() {

    this.usersService.getUser(this.username.value).subscribe((data: any) => {
      if (data && data.password === this.password.value) {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/home']);
      }else
      {
        alert('Usuario o contraseña incorrectos');
      }
  });
}}
