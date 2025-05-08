import { Injectable } from '@angular/core';
import {
  Firestore, collection, collectionData, addDoc, deleteDoc, doc, updateDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item {
  id?: string;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private collectionRef = collection(this.firestore, 'items');

  constructor(private firestore: Firestore) {}

  getItems(): Observable<Item[]> {
    return collectionData(this.collectionRef, { idField: 'id' }) as Observable<Item[]>;
  }

  addItem(item: Item) {
    return addDoc(this.collectionRef, item);
  }

  updateItem(item: Item) {
    const itemDoc = doc(this.firestore, `items/${item.id}`);
    return updateDoc(itemDoc, { name: item.name, description: item.description });
  }

  deleteItem(id: string) {
    const itemDoc = doc(this.firestore, `items/${id}`);
    return deleteDoc(itemDoc);
  }
}
