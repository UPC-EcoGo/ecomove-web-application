import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge } from 'rxjs';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})

export class RegisterFormComponent {
  names = new FormControl('', [Validators.required, Validators.minLength(4)]);
  lastNames = new FormControl('', [Validators.required, Validators.minLength(4)]);
  username = new FormControl('', [Validators.required, Validators.minLength(4)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(4)]);
  checkPassword = new FormControl('', [Validators.required, Validators.minLength(4)]);

  namesErrorMessage = '';
  lastNamesErrorMessage = '';
  usernameErrorMessage = '';
  emailErrorMessage = '';
  passwordErrorMessage = '';
  checkPasswordErrorMessage = '';

  constructor() {
    merge(this.names.statusChanges, this.names.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateNamesErrorMessage());

    merge(this.lastNames.statusChanges, this.lastNames.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateLastNamesErrorMessage());

    merge(this.username.statusChanges, this.username.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateUsernameErrorMessage());

    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateEmailErrorMessage());

    merge(this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updatePasswordErrorMessage());

    merge(this.checkPassword.statusChanges, this.checkPassword.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateCheckPasswordErrorMessage());
  }

  updateNamesErrorMessage() {
    if (this.names.hasError('required')) {
      this.namesErrorMessage = 'Debes ingresar un nombre';
    } else if (this.names.hasError('minlength')) {
      this.namesErrorMessage = 'No es un nombre válido';
    } else {
      this.namesErrorMessage = '';
    }
  }

  updateLastNamesErrorMessage() {
    if (this.lastNames.hasError('required')) {
      this.lastNamesErrorMessage = 'Debes ingresar un apellido';
    } else if (this.lastNames.hasError('minlength')) {
      this.lastNamesErrorMessage = 'No es un apellido válido';
    } else {
      this.lastNamesErrorMessage = '';
    }
  }

  updateUsernameErrorMessage() {
    if (this.names.hasError('required')) {
      this.usernameErrorMessage = 'Debes ingresar tu nombre de usuario';
    } else if (this.names.hasError('minlength')) {
      this.usernameErrorMessage = 'No es un nombre de usuario válido';
    } else {
      this.usernameErrorMessage = '';
    }
  }

  updateEmailErrorMessage() {
    if (this.names.hasError('required')) {
      this.emailErrorMessage = 'Debes ingresar tu correo electrónico';
    } else if (this.names.hasError('email')) {
      this.emailErrorMessage = 'No es un correo electrónico válido';
    } else {
      this.emailErrorMessage = '';
    }
  }

  updatePasswordErrorMessage() {
    if (this.password.hasError('required')) {
      this.passwordErrorMessage = 'Debes ingresar tu contraseña';
    } else if (this.password.hasError('minlength')) {
      this.passwordErrorMessage = 'No es una contraseña válida';
    } else {
      this.passwordErrorMessage = '';
    }
  }

  updateCheckPasswordErrorMessage() {
    if (this.checkPassword.hasError('required')) {
      this.checkPasswordErrorMessage = 'Debes volver a ingresar tu contraseña';
    } else if (this.checkPassword.hasError('minlength')) {
      this.checkPasswordErrorMessage = 'No es una contraseña válida';
    } else {
      this.checkPasswordErrorMessage = '';
    }
  }
}
