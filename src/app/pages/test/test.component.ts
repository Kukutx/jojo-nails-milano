import { ChangeDetectionStrategy, Component ,model, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import { NailBookingModalComponent } from '../../components/dialog/nail-booking-modal/nail-booking-modal.component';
import { HighlightDirective } from '../../shared/directives/highlight/highlight.directive'; // 导入指令
import { DateFormatPipe } from '../../shared/pipes/date-format/date-format.pipe'; // 导入 pipe

import { FirestoreService, Item } from '../../shared/services/firestore/firestore.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    MatButtonModule,
    HighlightDirective,
    DateFormatPipe,
    CommonModule,
    FormsModule,
  ],
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






  // items: Item[] = [];
  // newItem: Item = { name: '', description: '' };

  // constructor(private firestoreService: FirestoreService) {
  //   this.firestoreService.getItems().subscribe(data => this.items = data);
  // }

  // addItem() {
  //   if (!this.newItem.name) return;
  //   this.firestoreService.addItem(this.newItem).then(() => {
  //     this.newItem = { name: '', description: '' };
  //   });
  // }

  // editItem(item: Item) {
  //   const newName = prompt("新名称", item.name);
  //   const newDesc = prompt("新描述", item.description);
  //   if (newName !== null && newDesc !== null) {
  //     this.firestoreService.updateItem({ ...item, name: newName, description: newDesc });
  //   }
  // }

  // deleteItem(id: string) {
  //   this.firestoreService.deleteItem(id);
  // }


  newItem: Item = { name: '', description: '' };
  items$: Observable<Item[]>;

  constructor(private firestoreService: FirestoreService) {
    this.items$ = this.firestoreService.getItems(); // 重点：返回 Observable
  }

  addItem() {
    if (!this.newItem.name) return;
    this.firestoreService.addItem(this.newItem).then(() => {
      this.newItem = { name: '', description: '' };
    });
  }

  editItem(item: Item) {
    const newName = prompt('新名称', item.name);
    const newDesc = prompt('新描述', item.description);
    if (newName !== null && newDesc !== null) {
      this.firestoreService.updateItem({
        ...item,
        name: newName,
        description: newDesc,
      });
    }
  }

  deleteItem(id: string) {
    this.firestoreService.deleteItem(id);
  }
}
