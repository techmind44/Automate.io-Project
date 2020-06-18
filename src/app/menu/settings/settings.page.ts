import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../login-service.service';
import { UserdetailsService } from '../../userdetails.service';
import { LocationService } from '../../location.service';
import { DisplaypicService } from '../../displaypic.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  displayPic: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  location: string;
  postcode: number;
  checkbox: any;

  constructor(
    private userDetailsService: UserdetailsService,
    private loginService: LoginServiceService,
    private locationService: LocationService,
    private displaypicService: DisplaypicService
  ) { }

  //retrieves information from storage
  async ngOnInit() {
    this.loginService.getCred().then(val => this.username = val.username);

    this.userDetailsService.getDetails().then(val => {
      this.firstname = val.firstname;
      this.lastname = val.lastname;
      this.email = val.email;
    });

    this.locationService.getLocation().then(val => {
      this.location = val.location;
      this.postcode = val.postcode;
      this.checkbox = val.locationTick;
    });

    this.displaypicService.getPicture().then(val => this.displayPic = val);
  }

  //to change display picture
  changePic(file) {
    let fileReader = new FileReader();

    fileReader.onload = e => {
      this.displayPic = fileReader.result as string;
      this.displaypicService.setPicture();
    };

    fileReader.readAsDataURL(file[0]);
  }
}
