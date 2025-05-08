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

  goToGoogleMaps() {
    const googleMapsUrl = 'https://www.google.com/maps/place/?q=JoJo+nails/@45.4495567,9.2074567,17z';
    window.open(googleMapsUrl, '_blank');
  }
}
