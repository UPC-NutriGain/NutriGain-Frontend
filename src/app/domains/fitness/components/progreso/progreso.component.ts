import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-progreso',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})
export class ProgresoComponent implements OnInit {
  data: any[] = [];
  view: [number, number] = [700, 400];
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };




  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const userId = 1;
    this.http.get<any[]>(`https://fake-api-murex-one.vercel.app/progresos?userId=${userId}`)
      .subscribe(progresos => {
        this.data = progresos.map(p => ({
          name: `Semana ${p.semana}`,
          value: p.porcentajeCompletado
        }));
      });
  }
}
