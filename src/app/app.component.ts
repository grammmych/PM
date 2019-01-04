import {Component} from '@angular/core';
import {UserConfigService} from './_services/user-config.service';
import * as $ from 'jquery';
import {WebsocketService} from './WSModule';
import {MessageService} from './_services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PM';

  constructor(public userConfig: UserConfigService) {}

  public OnAuth(): void {
    if (this.userConfig.authentication(this.getUsername())) {
      this.userConfig.redirectTo('');
    }
  }

  private getUsername(): string {
    return $('#pmInputUsername').val().toString();
  }

  public inputUsernameChange(e: KeyboardEvent): void {
    if (e.keyCode === 13) {
      this.OnAuth();
    }
  }

  public clickLogo(): void {
    console.log('Click LOGO');
  }
}
