import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  userdetails = {
    firstname: '',
    lastname: '',
    email: '',
    dob: ''
  }

  constructor(private storage: Storage) { }

  //check storage values for the key
  async getDetails() {
    await this.storage.get('userdetails').then(val => {
      if(val == null) {
        this.userdetails = {
          firstname: '',
          lastname: '',
          email: '',
          dob: ''
        };
      } else {
        this.userdetails.firstname = val.firstname;
        this.userdetails.lastname = val.lastname;
        this.userdetails.email = val.email;
        this.userdetails.dob = val.dob;
      };      
    });

    return this.userdetails;
  }

  //updates value for key in storage
  setDetails() {
    this.storage.set('userdetails', this.userdetails);
  }
}
