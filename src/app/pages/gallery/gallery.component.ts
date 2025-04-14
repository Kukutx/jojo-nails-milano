import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,MatGridListModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  fullGallery : string[] = [
    'assets/nail-art1.jpg',
    'assets/nail-art2.jpg',
    'assets/nail-art3.jpg',
    'assets/nail-art4.jpg',
    'assets/nail-art5.jpg',
    'assets/nail-art6.jpg'
  ];
}
