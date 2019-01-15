import {BrowserModule} from '@angular/platform-browser';
import {routingModule} from './app.routing';
import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppComponent} from './app.component';
import {MainPageComponent} from './_components/main-page/main-page.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {AuthComponent} from './_components/auth/auth.component';
import {GameInfoCardComponent} from './_forms/game-info-card/game-info-card.component';
import {WebsocketModule} from './WSModule';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserConfigService} from './_services/user-config.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AuthComponent,
    GameInfoCardComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    routingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    WebsocketModule.config({
      url: 'ws://localhost:4200/ws'
    })
  ],
  providers: [
    UserConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
