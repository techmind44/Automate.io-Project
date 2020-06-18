import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DisplaypicService {
  displayPic: string;

  constructor(private storage: Storage) { }

  //check storage values for the key
  async getPicture() {
    await this.storage.get('displaypic').then(val => {
      if(val == null) {
        this.displayPic = '';
      } else {
        this.displayPic = val;
      };
    });

    return this.displayPic;
  }

  //updates the key value in storage
  setPicture() {
    this.storage.set('displaypic', this.displayPic);
  }

}
