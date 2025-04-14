import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCardComponent } from '../../components/media-card/media-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MediaCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  previewMedia: { type: 'image' | 'video'; url: string; alt?: string }[] = [
    { type: 'image', url: 'https://imgur.com/HizhJxS.jpg', alt: 'Nail art' },
    { type: 'video', url: 'https://d7c4jjeuqag9w.cloudfront.net/videos/19e0721c89c18073f8e766db793c115d0c2dbdb878e98fe84647d6679572e45c/0/540p' },
    { type: 'image', url: 'https://imgur.com/BVtIuQt.jpg', alt: 'Design 2' },
    { type: 'video', url: 'https://d7c4jjeuqag9w.cloudfront.net/videos/19e0721c89c18073f8e766db793c115d0c2dbdb878e98fe84647d6679572e45c/0/540p' },
    { type: 'image', url: 'https://imgur.com/eUDm7P2.jpg', alt: 'Nail art' },
    { type: 'image', url: 'https://d1sdeqoxcfgxl0.cloudfront.net/images/original/0204f12a2e064b8ddf87ae2429c06b5678f715c30bd7f90d25a7547f.jpg', alt: 'Design 2' },
  ];
}
