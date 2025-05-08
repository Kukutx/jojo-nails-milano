import {Component, Input, OnInit, OnDestroy} from '@angular/core';  
// import {MediaChange, ObservableMedia} from '@angular/flex-layout';  
// import {Subscription} from "rxjs/Subscription";  
import {Image} from "./grid-gallery-item/image.model";

@Component({
  selector: 'app-grid-gallery',
  standalone: true,
  imports: [],
  templateUrl: './grid-gallery.component.html',
  styleUrl: './grid-gallery.component.scss'
})
export class GridGalleryComponent {

  @Input() images!: Image[];
  @Input() cols: number = 4;
  @Input('cols.xs') cols_xs: number = 1;
  @Input('cols.sm') cols_sm: number = 2;
  @Input('cols.md') cols_md: number = 3;
  @Input('cols.lg') cols_lg: number = 4;
  @Input('cols.xl') cols_xl: number = 6;
  @Input() rowHeight: number = 1;
  @Input() gutterSize: number = 0;

  // mediaWatcher: Subscription;

  // constructor(private media: ObservableMedia) {
  // }

  // ngOnInit(){
  //   this.mediaWatcher = this.media.subscribe((change: MediaChange) => {
  //     this.cols = this[`cols_${change.mqAlias}`];
  //    });
  // }

  // ngOnDestroy(): void {
  //   this.mediaWatcher.unsubscribe();
  // }
}
