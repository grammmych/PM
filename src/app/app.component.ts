import {Component} from '@angular/core';
import {UserConfigService} from './_services/user-config.service';
import * as $ from 'jquery';
import {WebsocketService} from './WSModule';
import {MessageService} from './_services/message.service';
import {IApiMessage} from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PM';
  is_log_in_out = false;

  constructor(public userConfig: UserConfigService) {}

  public OnLogin(): void {
    this.is_log_in_out = true;
    this.userConfig.authentication(this.getUsername(), this.getPassword()).subscribe(
      (response: IApiMessage) => {
        console.log('Response: ', response);
        if (!response.error) {
          this.userConfig.initUserConfig();
          this.userConfig.redirectTo('');
        }
        this.is_log_in_out = false;
      }
    );
  }

  public OnLogout(): void {
    this.is_log_in_out = true;
    this.userConfig.logout().subscribe((response: IApiMessage) => {
      if (!response.error) {
        this.userConfig.initUserConfig();
        this.userConfig.redirectTo('/');
      }
      this.is_log_in_out = false;
    });
  }

  private getUsername(): string {
    return $('#pmInputUsername').val().toString();
  }

  private getPassword(): string {
    return $('#pmInputPassword').val().toString();
  }

  public inputUsernameChange(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.OnLogin();
    }
  }

  public clickLogo(): void {
    console.log('Click LOGO');
  }
}
