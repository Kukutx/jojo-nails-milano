import { ChangeDetectionStrategy, Component ,model, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { NailBookingModalComponent } from '../../components/dialog/nail-booking-modal/nail-booking-modal.component';
import { HighlightDirective } from '../../shared/directives/highlight/highlight.directive'; // 导入指令
import { DateFormatPipe } from '../../shared/pipes/date-format/date-format.pipe'; // 导入 pipe

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [MatButtonModule,HighlightDirective,DateFormatPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  dialog = inject(MatDialog);

  selectedDate = model<Date | null>(null);

  openDialog() {
    const dialogRef = this.dialog.open(NailBookingModalComponent, {
      minWidth: '500px',
      data: {selectedDate: this.selectedDate()},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedDate.set(result);
    });
  }

  currentDate: string = '2025-04-09T12:00:00Z';  // 示例日期
}
