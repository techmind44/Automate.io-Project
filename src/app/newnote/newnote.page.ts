import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { NoteImageService } from '../note-image.service';

@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.page.html',
  styleUrls: ['./newnote.page.scss'],
})
export class NewnotePage implements OnInit {
  header: string;
  title: string;
  label: string;
  image: string;
  content: string;
  button: string;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private noteImageService: NoteImageService
  ) { }

  /*
  title and content will be retrieved
  depending on those, header and button will be displayed accordingly
  */
  ngOnInit() {
    this.title = this.navParams.get('title');
    this.content = this.navParams.get('content');

    if (this.title == undefined) {
      this.header = 'Create new note';
      this.button = 'Create';
    } else {
      this.header = 'Edit';
      this.button = 'Save changes';
    };
  };
  
  /*
  the method will push a new note to the array,
  or update the existing note
  */
  saveNote() {
    this.modalController.dismiss({
      title: this.title,
      label: this.label,
      content: this.content,
      image: this.image
    });
  };

  //the method dismisses the modal without making any changes
  cancel() {
    this.modalController.dismiss();
  }

  //to handle image
  insertImage(file) {
    let fileReader = new FileReader();

    fileReader.onload = e => {
      this.image = fileReader.result as string;
      this.noteImageService.setImage(this.image);
    };

    fileReader.readAsDataURL(file[0]);
  }
}