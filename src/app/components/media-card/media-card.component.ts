import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MediaUtilsService } from '../../shared/services/media-utils/media-utils.service';

@Component({
  selector: 'app-media-card',
  standalone: true,
  imports: [CommonModule,MatGridListModule],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss'
})
export class MediaCardComponent {
  @Input() media!: { type: 'image' | 'video', url: string, alt?: string };

  mediaUrl: string = 'https://example.com/image.jpg';
  isNetworkMedia = this.mediaUtils.isFromNetwork(this.mediaUrl);
  
  everageHeight = 200;
  images: any[] = [
    // { url: "https://unsplash.it/700/400?image=1", width: 700, height: 400 },
    // { url: "https://unsplash.it/700/300?image=2", width: 700, height: 300 },
    // { url: "https://unsplash.it/700/500?image=3", width: 700, height: 500 },
    // { url: "https://unsplash.it/700/250?image=4", width: 700, height: 250 },
    // { url: "https://unsplash.it/700/450?image=5", width: 700, height: 450 },
    // { url: "https://unsplash.it/700/350?image=6", width: 700, height: 350 },
    // { url: "https://unsplash.it/700/600?image=18", width: 700, height: 600 },
    // { url: "https://unsplash.it/700/700?image=8", width: 700, height: 700 },
    // { url: "https://unsplash.it/700/200?image=19", width: 700, height: 200 },
    // { url: "https://unsplash.it/700/300?image=10", width: 700, height: 300 },
    // { url: "https://unsplash.it/700/420?image=11", width: 700, height: 420 },
    // { url: "https://unsplash.it/700/450?image=12", width: 700, height: 450 },
    // { url: "https://unsplash.it/700/550?image=13", width: 700, height: 550 },
    // { url: "https://unsplash.it/700/640?image=14", width: 700, height: 640 },
    // { url: "https://unsplash.it/700/420?image=15", width: 700, height: 420 },
    // { url: "https://unsplash.it/700/430?image=16", width: 700, height: 430 },
    // { url: "https://unsplash.it/700/340?image=17", width: 700, height: 340 },
    // { url: "https://unsplash.it/700/240?image=27", width: 700, height: 240 },
    // { url: "https://unsplash.it/700/780?image=19", width: 700, height: 780 },
    // { url: "https://unsplash.it/700/470?image=20", width: 700, height: 470 },
    // { url: "https://unsplash.it/700/380?image=21", width: 700, height: 380 },
    // { url: "https://unsplash.it/700/240?image=22", width: 700, height: 240 },
    // { url: "https://unsplash.it/700/900?image=23", width: 700, height: 900 },
    // { url: "https://unsplash.it/700/480?image=24", width: 700, height: 480 },
    // { url: "https://unsplash.it/700/300?image=25", width: 700, height: 300 },
    // { url: "https://unsplash.it/700/400?image=26", width: 700, height: 400 },
    // { url: "https://unsplash.it/700/500?image=27", width: 700, height: 500 },
    // { url: "https://unsplash.it/700/520?image=28", width: 700, height: 520 },
    // { url: "https://unsplash.it/700/920?image=29", width: 700, height: 920 },
    // { url: "https://unsplash.it/700/400?image=30", width: 700, height: 400 },
    // { url: "https://unsplash.it/700/560?image=31", width: 700, height: 560 },
    // { url: "https://unsplash.it/700/370?image=32", width: 700, height: 370 },
  ];

  constructor(private mediaUtils: MediaUtilsService) {
    const random = [160, 180, 200, 220, 240, 280, 300, 320, 360, 380, 400, 420, 480, 500, 520, 560, 600, 620, 660, 680, 720, 760, 800, 860, 920];
    for (let i = 1; i <= 10; i++) {
      let width = random[Math.floor(Math.random() * random.length)];
      random.reverse();
      let height = random[Math.floor(Math.random() * random.length)];
      while (
        (width / height) < 0.5625 
        || 
        (width / height) > 3
      ) {
        width = random[Math.floor(Math.random() * random.length)];
        random.reverse();
        height = random[Math.floor(Math.random() * random.length)];
      }
      console.log(width, height);
      this.images.push({
        url: `https://unsplash.it/${width}/${height}?image=${i+10}`,
        width: width,
        height: height
      });
    }

    this.images.forEach((item, index) => {
      item.id = index + 1;
    });
  }
}
