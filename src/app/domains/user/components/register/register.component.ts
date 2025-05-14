import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserApiService } from '../../services/user-api.service';
import { Router } from '@angular/router';
import { User } from '../../data/internal/user.model';
import { MatFormFieldModule, MatLabel, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCard} from '@angular/material/card';
import {MatOption, MatSelect} from '@angular/material/select';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatLabel, MatError, MatCard, MatSelect, MatOption],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form!: FormGroup;
  successMessage = '';
  errorMessage = '';
  mensajeError = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserApiService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(13)]],
      caminoSeleccionado: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const newUser: User = {
      ...this.form.value,
      id: Date.now() // simulamos ID único
    };

    this.userService.createUser(newUser).subscribe({
      next: () => {
        this.successMessage = 'Usuario registrado exitosamente';
        this.router.navigate(['/login']);
      },
      error: () => {
        this.errorMessage = 'Error al registrar el usuario';
      }
    });
  }

  irALogin() {
    this.router.navigate(['/login']);
  }

}
