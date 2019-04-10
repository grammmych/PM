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
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserConfigService} from './_services/user-config.service';
import {MyInterceptor} from './http.interceptor';
import { RegistrationComponent } from './_components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AuthComponent,
    GameInfoCardComponent,
    RegistrationComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    routingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center'
    }),
    WebsocketModule.config({
      url: 'ws://localhost:4200/ws'
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true},
    UserConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
