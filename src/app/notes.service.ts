import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  noteList = [];

  constructor(private storage: Storage) { }

  //check storage for notes
  async getNotes() {
    await this.storage.get('notes').then(val => {
      if (val == null) {
        this.noteList = [
          {
            title: 'homework',
            label: 'uni',
            content: 'need to finish homework today'
          },
          {
            title: 'final exam',
            label: 'uni',
            content: 'check uni website for final exam schedule'
          },
          {
            title: 'weekly specials',
            label: 'groceries',
            content: 'must buy coffee from this week\'s specials\' catalogue'
          },
          {
            title: 'to buy',
            label: 'groceries',
            content: 'chicken, eggs'
          }
        ];
      } else {
        this.noteList = val;
      };
    });

    return this.noteList;
  }

  //updates the array in storage
  updateNotes(noteGroupList: string, newList) {
    this.storage.set(noteGroupList, newList);
  }
}
