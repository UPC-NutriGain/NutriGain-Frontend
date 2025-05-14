import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {MatCard} from '@angular/material/card';
import {BottomNavbarComponent} from '../../../../shared/components/bottom-navbar/bottom-navbar.component';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-retos',
  standalone: true,
  imports: [CommonModule, MatCard, BottomNavbarComponent, MatButton],
  templateUrl: './retos.component.html',
  styleUrls: ['./retos.component.css']
})
export class RetosComponent implements OnInit {
  retos: any[] = [];
  retoActual: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(`http://localhost:3000/retos`)
      .subscribe(data => {
        this.retos = data;
        this.seleccionarRetoAleatorio();
      });
  }

  seleccionarRetoAleatorio() {
    const index = Math.floor(Math.random() * this.retos.length);
    this.retoActual = this.retos[index];
  }
}
