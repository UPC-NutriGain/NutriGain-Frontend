import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from '../../services/user-api.service';
import {MatCard} from '@angular/material/card';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCard, MatFormField, MatInput, MatButton,MatError,MatLabel  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;

    this.userService.getUsers().subscribe(users => {
      const found = users.find(u => u.email === email && u.password === password);

      if (found) {
        this.router.navigate(['/dashboard']); // Ruta destino
      } else {
        this.errorMessage = 'Credenciales incorrectas';
      }
    });
  }

  irARegistro() {
    this.router.navigate(['/register']);
  }
}
