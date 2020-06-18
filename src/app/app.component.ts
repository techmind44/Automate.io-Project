import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

import { LoginServiceService } from './login-service.service';
import { NotesService } from './notes.service';
import { LabelsService } from './labels.service';
import { DeletednotesService } from './deletednotes.service';
import { DisplaypicService } from './displaypic.service';
import { UserdetailsService } from './userdetails.service';
import { LocationService } from './location.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private loginService: LoginServiceService,
    private noteService: NotesService,
    private labelsService: LabelsService,
    private deletedNotesService: DeletednotesService,
    private displayPicService: DisplaypicService,
    private userDetailsService: UserdetailsService,
    private locationService: LocationService
  ) {
    this.initializeApp();
  }

  //list of pages for the app
  //to navigate to using the sidemenu
  pages = [
    {
      title: 'Notes',
      url: './home',
      icon: 'document'
    },
    {
      title: 'Labels',
      url: '/menu/labels',
      icon: 'bookmark'
    },
    {
      title: 'Bin',
      url: '/menu/deleted',
      icon: 'trash'
    },
    {
      title: 'Settings',
      url: '/menu/settings',
      icon: 'settings'
    }
  ]

  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });

    //retrieves information from storage
    //for login page
    this.loginService.getCred();
    //remembers login state after the very first login
    if (this.loginService.loginObject.checkbox == true) {
      this.router.navigateByUrl('home/' + this.loginService.loginObject.username);
    }


    //for home page - notes storage
    this.noteService.getNotes();
    
    //for labels page - notes storage
    this.labelsService.getLabels();

    //for bin page - notes storage
    this.deletedNotesService.getNotes();

    //for settings page
    this.displayPicService.getPicture();
    
    //for user details page
    this.userDetailsService.getDetails();

    //for location page
    this.locationService.getLocation();

  }

}