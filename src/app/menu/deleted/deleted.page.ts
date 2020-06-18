import { Component, OnInit } from '@angular/core';
import { DeletednotesService } from '../../deletednotes.service';
import { NoteImageService } from '../../note-image.service';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.page.html',
  styleUrls: ['./deleted.page.scss'],
})
export class DeletedPage implements OnInit {
  title: string;
  label: string;
  content: string;
  image: string;
  notes = [];

  constructor(
    private deletedNotesService: DeletednotesService,
    private noteImageService: NoteImageService
  ) { }

  ngOnInit() {
    //to get the deleted notes from storage
    this.deletedNotesService.getNotes().then(val => this.notes = val);

    //to get image for notes from storage
    this.noteImageService.getImage().then(val => this.image = val);
  }
  
}
