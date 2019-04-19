import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {UserConfigService} from '../../_services/user-config.service';
import {IApiMessage} from '../../app.types';
import {MessageService} from '../../_services/message.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  is_log_in_out = false;
  is_registration = false;
  auth_data = {
    username: '',
    password: '',
    email: ''
  };

  constructor(private userConfig: UserConfigService, private msgService: MessageService) { }

  ngOnInit() {}

  public OnLogin(): void {
    this.is_log_in_out = true;
    this.userConfig.authentication(this.auth_data.email, this.auth_data.password).subscribe(
      (response: IApiMessage) => {
        if (!response.error) {
          this.userConfig.initUserConfig();
          this.userConfig.redirectTo('');
          this.is_registration = false;
          this.userConfig.isAuthDialog = false;
          this.clearAuthData();
          this.msgService.onSuccess('Login Success');
        }
        this.is_log_in_out = false;
      }
    );
  }

  public OnRegistration(): void {
    this.userConfig.registration({
      login: this.auth_data.username,
      email: this.auth_data.email
    }).subscribe(
      (response: IApiMessage) => {
        console.log('RegResp: ', response);
        if (!response.error) {
          this.is_registration = false;
          this.clearAuthData();
          this.userConfig.isAuthDialog = false;
          this.msgService.onInfo('Check your E-mail an confirm registration');
        }
      }
    );
  }

  private clearAuthData(): void {
    this.auth_data.username = '';
    this.auth_data.password = '';
    this.auth_data.email = '';
  }
}
