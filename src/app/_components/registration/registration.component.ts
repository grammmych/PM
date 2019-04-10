import { Component, OnInit } from '@angular/core';
import {IUserRegistrationData} from '../../app.types';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registration_data: IUserRegistrationData = {
    login: '',
    email: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public onRegistration(): void {
    console.log('Registration: ', this.registration_data);
  }
}
