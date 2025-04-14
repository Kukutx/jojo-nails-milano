import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS,
  provideNativeDateAdapter,
} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';

@Component({
  selector: 'app-nail-booking-modal',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMatTimepickerModule,
    ReactiveFormsModule,],
  providers: [
      provideNativeDateAdapter(),
      {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS},
  ],
  templateUrl: './nail-booking-modal.component.html',
  styleUrl: './nail-booking-modal.component.scss'
})
export class NailBookingModalComponent {
  dialogRef = inject<MatDialogRef<NailBookingModalComponent>>(
    MatDialogRef<NailBookingModalComponent>,
  );
  data = inject(MAT_DIALOG_DATA);

  readonly date = new FormControl(new Date());
  time = new FormControl('09:00');

  minTime = '09:00';
  maxTime = '21:00';

  constructor() {
    // const data = this.data;

    // this.date.setValue(data.selectedDate);

    if (this.data?.selectedDate) {
      const dateValue = new Date(this.data.selectedDate);
      this.date.setValue(dateValue);
      this.time.setValue(this.formatTime(dateValue));   // 设置初始时间
      this.updateTimeRange(dateValue);
    }

    // 自动监听日期变化，更新时间范围
    this.date.valueChanges.subscribe(date => {
      if (date) this.updateTimeRange(date);
    });
  }

  updateTimeRange(date: Date): void {
    const day = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    if (day === 0) {
      this.minTime = '10:00';
      this.maxTime = '20:00';
    } else {
      this.minTime = '09:00';
      this.maxTime = '21:00';
    }

    // 如果当前时间不在有效范围内，自动设置为最小时间
    const currentTime = this.time.value;
    if (currentTime && !this.isTimeInRange(currentTime, this.minTime, this.maxTime)) {
      this.time.setValue(this.minTime);
    }
  }

  isTimeInRange(value: string, min: string, max: string): boolean {
    return value >= min && value <= max;
  }

  confirmBooking(): void {
    const selectedDate = this.date.value;
    const selectedTime = this.time.value;

    if (selectedDate && selectedTime) {
      const [hours, minutes] = selectedTime.split(':').map(Number);
      const finalDate = new Date(selectedDate);
      finalDate.setHours(hours);
      finalDate.setMinutes(minutes);
      finalDate.setSeconds(0);
      finalDate.setMilliseconds(0);

      this.dialogRef.close(finalDate);
    }
  }

  private formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
}
