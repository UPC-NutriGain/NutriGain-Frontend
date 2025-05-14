import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  avatar: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const userId = 1;
    this.http.get<any[]>(`http://localhost:3000/avatares?userId=${userId}`)
      .subscribe(data => {
        if (data.length > 0) {
          this.avatar = data[0];
        }
      });
  }
}
