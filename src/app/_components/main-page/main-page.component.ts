import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {UserConfigService} from '../../_services/user-config.service';
import {GamesService} from '../../_services/games.service';
import {GameClass} from '../../_classes/Game.class';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private userConfig: UserConfigService, private gamesService: GamesService) { }

  ngOnInit() {
    this.userConfig.checkAuth();
  }

  get gamesList(): GameClass[] {
    return this.gamesService.gamesList;
  }
}
