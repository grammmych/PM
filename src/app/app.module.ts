import {BrowserModule} from '@angular/platform-browser';
import {routingModule} from './app.routing';
import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppComponent} from './app.component';
import { MainPageComponent } from './_components/main-page/main-page.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { AuthComponent } from './_components/auth/auth.component';
import { GameInfoCardComponent } from './_forms/game-info-card/game-info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AuthComponent,
    GameInfoCardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    routingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
