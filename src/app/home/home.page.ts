import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { WelcomePage } from '../welcome/welcome.page';
import { NewnotePage } from '../newnote/newnote.page';

import { UserdetailsService } from '../userdetails.service';
import { NotesService } from '../notes.service';
import { DeletednotesService } from '../deletednotes.service';
import { NoteImageService } from '../note-image.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  firstname: string;
  username: string;
  title: string;
  label: string;
  content: string;
  image: string;
  noteList = [];
  deleted = [];

  constructor(
    private modalController: ModalController,
    private userDetailsService: UserdetailsService,
    private notesService: NotesService,
    private deletedNotesService: DeletednotesService,
    private noteImageService: NoteImageService
  ) { }

  //retrieve data from storage
  ngOnInit() {
    this.userDetailsService.getDetails().then(val => this.firstname = val.firstname);
    this.notesService.getNotes().then(val => this.noteList = val);
    this.deletedNotesService.getNotes().then(val => this.deleted = val);
    this.noteImageService.getImage().then(val => this.image = val);
   
    this.welcome();
  }

  //the function which displays the welcome message after user logs in
  async welcome() {
    const welcome = await this.modalController.create({
      component: WelcomePage,
      componentProps: {}
    });

    welcome.onDidDismiss().then(returnVal => {
      this.username = returnVal.data;
    });

    return welcome.present();
  }; 

  //functionalities
  //add notes
  async addNote() {
    const newnote = await this.modalController.create({
      component: NewnotePage,
      componentProps: {}
    });

    newnote.onDidDismiss().then(returnVal => {
      this.noteList.push({
        title: returnVal.data.title,
        label: returnVal.data.label,
        content: returnVal.data.content,
        image: returnVal.data.image
      });
      this.notesService.updateNotes('notes', this.noteList);
    });

    return newnote.present();
  };

  //edit notes
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
      this.notesService.updateNotes('notes', this.noteList);
    });

    return note.present();
  };

  //delete notes
  deleteNote(i: number) {
    if(confirm(`Delete ${this.noteList[i].title}?`)) {
      this.deleted.push({
        title: this.noteList[i].title,
        label: this.noteList[i].label,
        content: this.noteList[i].content,
        image: this.noteList[i].image
      });
      this.noteList.splice(i,1);
    };
    this.deletedNotesService.updateNotes('bin', this.deleted);
    this.notesService.updateNotes('notes', this.noteList);
  };
}
