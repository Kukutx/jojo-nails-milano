import { Component } from '@angular/core';
import { QrCodeComponent } from '../../components/qr-code/qr-code.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [QrCodeComponent,LazyLoadImageModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  defaultImage = 'https://imgur.com/JLAcXGZ.jpg';
  image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
  offset = 100;
}
