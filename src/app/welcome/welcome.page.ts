import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  welcomeCheckbox: boolean;

  constructor(
    private modalController: ModalController,
    private storage: Storage
  ) { }

  async ngOnInit() {
    //check welcomeCheckbox value after first login
    await this.storage.get('welcomeCheckbox').then(value => this.welcomeCheckbox = value);
    
    //will be dismissed automatically if the checkbox is ticked
    if(this.welcomeCheckbox == true) {
      this.modalController.dismiss();
    };
  };

  //to close welcome screen
  closeWelcome() {
    this.modalController.dismiss();
    this.storage.set('welcomeCheckbox', this.welcomeCheckbox);
  };

}
