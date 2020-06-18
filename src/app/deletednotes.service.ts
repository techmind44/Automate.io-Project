import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DeletednotesService {
  deletednotes = [];

  constructor(private storage: Storage) { }

  //check storage values for the key
  async getNotes() {
    await this.storage.get('bin').then(val => {
      if(val == null) {
        this.deletednotes = [
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
        this.deletednotes = val;
      };
    });

    return this.deletednotes;
  }

  //updates the array in the storage
  updateNotes(noteGroupList: string, newList) {
    this.storage.set(noteGroupList, newList);
  };
}
