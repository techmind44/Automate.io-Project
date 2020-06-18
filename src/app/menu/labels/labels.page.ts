import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewnotePage } from '../../newnote/newnote.page';

import { NotesService } from '../../notes.service';
import { LabelsService } from '../../labels.service';
import { DeletednotesService } from '../../deletednotes.service';
import { NoteImageService } from '../../note-image.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.page.html',
  styleUrls: ['./labels.page.scss'],
})
export class LabelsPage implements OnInit {
  title: string;
  label: string;
  content: string;
  image: string;
  noteList = [];
  deleted = [];

  constructor(
    private modalController: ModalController,
    private notesService: NotesService,
    private labelsService: LabelsService,
    private deletedNotesService: DeletednotesService,
    private noteImageService: NoteImageService
  ) { }

  //retrieve data from storage
  ngOnInit() {
    this.noteList = this.labelsService.getLabels();
    this.deletedNotesService.getNotes().then(val => this.deleted = val);
    this.noteImageService.getImage().then(val => this.image = val);
  }

  //functionalities
  //to add note with this label
  async addNote() {
    const note = await this.modalController.create({
      component: NewnotePage,
      componentProps: {}
    });

    note.onDidDismiss().then(returnVal => {
      this.noteList.push({
        title: returnVal.data.title,
        label: returnVal.data.label,
        content: returnVal.data.content,
        image: returnVal.data.image,
      });
      this.labelsService.updateLabels('labels', this.noteList);
      this.notesService.updateNotes('notes', this.noteList);
    });

    return note.present();
  };

  //to edit note
  async editNote(i: number) {
    const note = await this.modalController.create({
      component: NewnotePage,
      componentProps: {
        title: this.noteList[i].title,
        label: this.noteList[i].label,
        content: this.noteList[i].content,
        image: this.noteList[i].image
      }
    });

    note.onDidDismiss().then(returnVal => {
      this.noteList[i] = {
        title: returnVal.data.title,
        label: returnVal.data.label,
        content: returnVal.data.content,
        image: returnVal.data.image
      };
      this.labelsService.updateLabels('labels', this.noteList);
      this.notesService.updateNotes('notes', this.noteList);
    });

    return note.present();
  };

  //to delete note
  deleteNote(i: number) {
    if (confirm(`Delete ${this.noteList[i].title}?`)) {
      this.deleted.push({
        title: this.noteList[i].title,
        label: this.noteList[i].label,
        content: this.noteList[i].content,
        image: this.noteList[i].image
      })
      this.noteList.splice(i, 1);
    };
    this.deletedNotesService.updateNotes('bin', this.deleted);
    this.labelsService.updateLabels('notes', this.noteList);
  };
}