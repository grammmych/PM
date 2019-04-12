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

  constructor(public userConfig: UserConfigService, private msgService: MessageService) {
  }

  public clickLogo(): void {
    console.log('Click LOGO');
  }

  public OnLogInOut(): void {
    if (this.userConfig.isAuth()) { // LogOut
      this.userConfig.logout().subscribe((response: IApiMessage) => {
        if (!response.error) {
          this.userConfig.initUserConfig();
          this.userConfig.redirectTo('/');
          this.msgService.onInfo('Logout Success');
        }
      });
    } else {                        // LogIn
      this.userConfig.isAuthDialog = true;
    }
  }
}
