import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  loginObject = {
    username: '', 
    password: '',
    checkbox: false
  }

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  //retrieves login details from storage
  async getCred() {
    await this.storage.get('login').then(val => {
      if(val == null) {
        this.loginObject = {
          username: '',
          password: '',
          checkbox: false
        };
      } else {
        this.loginObject.username = val.username;
        this.loginObject.password = val.password;
        this.loginObject.checkbox = val.checkbox;
      };      
    });
    
    return this.loginObject;
  }

  //set user credentials
  setCred(loginKey, newLoginCred) {
    this.storage.set(loginKey, newLoginCred);
  }
}
