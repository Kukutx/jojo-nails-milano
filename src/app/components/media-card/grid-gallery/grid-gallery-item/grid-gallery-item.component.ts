import {Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import {Image} from "./image.model";

@Component({
  selector: 'app-grid-gallery-item',
  standalone: true,
  imports: [],
  templateUrl: './grid-gallery-item.component.html',
  styleUrl: './grid-gallery-item.component.scss'
})
export class GridGalleryItemComponent {
  @Input() image!: Image;
  @Input() rowHeight: number = 1;
  @Input() gutterSize: number = 0;
  @ViewChild('img') img!: ElementRef; 

  public rows: number = 0;

  @HostListener('window:resize')
  calculateRows() {
    this.rows = Math.floor(this.img.nativeElement.offsetHeight / (this.rowHeight + this.gutterSize));
  }
}
