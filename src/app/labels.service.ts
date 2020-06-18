import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NotesService } from './notes.service';

@Injectable({
  providedIn: 'root'
})
export class LabelsService {
  noteList = [];

  constructor(
    private storage: Storage,
    private notesService: NotesService
  ) { }

  //check value in storage
  //only notes with labels will be displayed in the labels page
  getLabels() {    
    this.notesService.getNotes().then(val => {
      for(let i = 0; i < val.length; i++) {
        if(val[i].label) {
          this.noteList.push(val[i]);
        };
      };
    })

    return this.noteList;
  }

  //updates the array in storage
  updateLabels(noteGroupList: string, newList) {
    this.storage.set(noteGroupList, newList);
  }
}
