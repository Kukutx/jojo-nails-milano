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

  constructor(private mediaUtils: MediaUtilsService) {}

  mediaUrl: string = 'https://example.com/image.jpg';
  isNetworkMedia = this.mediaUtils.isFromNetwork(this.mediaUrl);
}
