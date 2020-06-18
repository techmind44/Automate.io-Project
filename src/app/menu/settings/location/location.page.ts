import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../../../location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  locationDetails = {
    location: '',
    postcode: null,
    locationTick: false
  }

  location: string;
  postcode: number;
  locationTick: boolean;

  constructor(
    private router: Router,
    private locationService: LocationService
  ) { }

  //retrieves location from storage
  ngOnInit() {
    this.locationService.getLocation().then(val => {
      this.location = val.location;
      this.postcode = val.postcode;
      this.locationTick = val.locationTick;
    });
  }

  //to save location to storage
  saveLocation() {
    this.locationDetails = {
      location: this.location,
      postcode: this.postcode,
      locationTick: this.locationTick
    };
    this.locationService.setLocation();
    this.router.navigateByUrl('/menu/settings');
  }

}
