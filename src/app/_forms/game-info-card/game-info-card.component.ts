import {Component, Input, OnInit} from '@angular/core';
import {GameClass} from '../../_classes/Game.class';

@Component({
  selector: 'app-game-info-card',
  templateUrl: './game-info-card.component.html',
  styleUrls: ['./game-info-card.component.scss']
})
export class GameInfoCardComponent implements OnInit {

  @Input()
  private _gameData: GameClass;

  constructor() {}

  ngOnInit() {
  }

  get gameName() {
    return this._gameData.gameInfo.name;
  }

  get gameImagePath() {
    return this._gameData.gameInfo.imagePath;
  }
}
