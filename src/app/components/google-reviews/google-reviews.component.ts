import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeComponent } from '../../components/qr-code/qr-code.component';

@Component({
  selector: 'app-google-reviews',
  standalone: true,
  imports: [CommonModule,QrCodeComponent],
  templateUrl: './google-reviews.component.html',
  styleUrl: './google-reviews.component.scss'
})
export class GoogleReviewsComponent {
  reviews = [
    {
      author: 'Elena Bianchi',
      avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWyvP83nNa9D6hFtWkOTuy2qsdMYGLp5SXSwfR3RXFIthNbJrI=w45-h45-p-rp-mo-br100', // 替换成真实地址或用默认图
      text: '💅 Un’esperienza di manicure fantastica! Questo salone ha cambiato gestione di recente e si vede subito la differenza! L’ambiente è rilassante e naturale, perfetto per un momento di relax. Inoltre, i prezzi sono super convenienti e il rapporto qualità-prezzo è ottimo! Le estetiste sono molto professionali, gli strumenti sono puliti e igienizzati, e la qualità del lavoro è eccellente. Le recensioni negative riguardavano la vecchia gestione, ma ora il servizio è completamente migliorato. Super consigliato! 💖💅'
    },
    {
      author: 'mishh',
      avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjV5DGPH9OAFhSbdgV0fPjYla7r7EaEv2zO4f3rDSeJyeZxi98c=w45-h45-p-rp-mo-br100', // 替换成真实地址或用默认图
      text: 'Hanno cambiato gestore le ragazze nuove sono molto gentili e professionali.'
    }
  ];

  goToGoogleMaps() {
    const googleMapsUrl = 'https://www.google.com/maps/place/?q=JoJo+nails/@45.4495567,9.2074567,17z';
    window.open(googleMapsUrl, '_blank');
  }
}
