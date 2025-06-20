import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BottomNavbarComponent} from '../../../../shared/components/bottom-navbar/bottom-navbar.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-rutinas-picker',
  standalone: true,
  imports: [CommonModule, BottomNavbarComponent, RouterModule],
  templateUrl: './rutinas-picker.component.html',
  styleUrl: './rutinas-picker.component.css'
})
export class RutinasPickerComponent {
  navigateTo(path: string) {
    window.location.href = path;
  }
  navigateToAutomaticPlan() {
    this.navigateTo('/rutinas');
  }
  navigateToManualPlan() {
    this.navigateTo('/rutinas/crear-rutina');
  }
}
