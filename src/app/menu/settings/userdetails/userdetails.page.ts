import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from '../../../userdetails.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.page.html',
  styleUrls: ['./userdetails.page.scss'],
})
export class UserdetailsPage implements OnInit {
  userdetails = {
    firstname: '',
    lastname: '',
    email: '',
    dob: ''
  }

  firstName: string;
  lastName: string;
  email: string;
  dob: any;

  constructor(
    private router: Router,
    private userDetailsService: UserdetailsService
  ) { }

  //retrieves user details from storage
  ngOnInit() {
    this.userDetailsService.getDetails().then(val => {
      this.firstName = val.firstname;
      this.lastName = val.lastname;
      this.email = val.email;
      this.dob = val.dob;
    });
  }

  //functionalities
  //save changes to user profile
  saveChanges() {
    this.userdetails = {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      dob: this.dob
    };
    this.userDetailsService.setDetails();
    this.router.navigateByUrl('/menu/settings');
  }
}
