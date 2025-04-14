import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  phoneNumber = '+39 123 456 789';
  address = 'Via Milano, 10, 20100 Milano, Italy';
  email = 'info@example.com';
  googleMapsUrl = 'https://www.google.com/maps?q=Via+Milano,+10,+20100+Milano,+Italy';
  workingHours = [
    { day: '周一', hours: '10:00 - 20:00' },
    { day: '周二', hours: '10:00 - 20:00' },
    { day: '周三', hours: '10:00 - 20:00' },
    { day: '周四', hours: '10:00 - 20:00' },
    { day: '周五', hours: '10:00 - 20:00' },
    { day: '周六', hours: '10:00 - 18:00' },
    { day: '周日', hours: '休息' }
  ];
}
