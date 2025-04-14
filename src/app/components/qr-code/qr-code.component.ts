import { Component } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [LazyLoadImageModule],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.scss'
})
export class QrCodeComponent {
  defaultImage = 'https://imgur.com/JLAcXGZ.jpg';
  image = 'https://imgur.com/E9DUqmG.jpg';
  offset = 100;
}
