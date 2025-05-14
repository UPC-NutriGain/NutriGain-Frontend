import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {BottomNavbarComponent} from '../../../../shared/components/bottom-navbar/bottom-navbar.component';

@Component({
  selector: 'app-nutricion',
  standalone: true,
  imports: [CommonModule, BottomNavbarComponent],
  templateUrl: './nutricion.component.html',
  styleUrls: ['./nutricion.component.css']
})
export class NutricionComponent implements OnInit {
  planes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const userId = 1; // simulado por ahora
    this.http.get<any[]>(`http://localhost:3000/planesNutricionales?userId=${userId}`)
      .subscribe(data => {
        this.planes = data;
      });
  }
}
