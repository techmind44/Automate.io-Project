import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NoteImageService {
  noteImage: string;

  constructor(private storage: Storage) { }

  //check image stored in storage
  async getImage() {
    await this.storage.get('noteImage').then(val => {
      if(val == null) {
        this.noteImage = '';
      } else {
        this.noteImage = val;
      };
    });

    return this.noteImage;
  }

  //saves the image in storage
  setImage(imageVar: string) {
    this.storage.set('noteImage', imageVar);
  };
}
