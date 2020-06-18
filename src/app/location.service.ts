import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locationDetails = {
    location: '',
    postcode: null,
    locationTick: false
  }

  constructor(private storage: Storage) { }

  //checks value stored in storage
  async getLocation() {
    await this.storage.get('location').then(val => {
      if(val == null) {
        this.locationDetails = {
          location: '',
          postcode: null,
          locationTick: false
        };
      } else {
        this.locationDetails.location = val.location;
        this.locationDetails.postcode = val.postcode;
        this.locationDetails.locationTick = val.locationTick;
      };
    });

    return this.locationDetails;
  }

  //updates location in storage
  setLocation() {
    this.storage.set('location', this.locationDetails);
  }
}
