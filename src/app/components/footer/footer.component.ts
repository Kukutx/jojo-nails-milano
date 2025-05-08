import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  email: string = '';
  successMessage: string = '';

  subscribeNewsletter() {
    if (this.email.trim()) {
      // 模拟提交逻辑
      this.successMessage = 'Subscribed successfully!';
      this.email = '';
      setTimeout(() => this.successMessage = '', 3000);
    }
  }
}
