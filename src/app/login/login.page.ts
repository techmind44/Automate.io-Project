import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginDetails = {
    username: '',
    password: '',
    checkbox: false
  }

    username: string;
    password: string;
    checkbox: boolean;

  constructor(
    private router: Router,
    private storage: Storage,
    private storageService: LoginServiceService
  ) { }

  async ngOnInit() {
    this.storageService.getCred().then(val => {
      this.username = val.username;
      this.password = val.password;
      this.checkbox = val.checkbox;
    });
  }

  //login to app
  login() {
    this.loginDetails = {
      username: this.username,
      password: this.password,
      checkbox: this.checkbox
    };
    this.storageService.setCred('login', this.loginDetails);
    this.router.navigateByUrl('home/' + this.loginDetails.username);
  };

}
