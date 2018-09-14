import { Injectable } from '@angular/core';
import {GameClass, GameInfoClass} from '../_classes/Game.class';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private _gamesList: GameClass[] = [];

  constructor() {
    const TTT: GameClass = new GameClass(
      new GameInfoClass('TicTacToe', 'TTT description.', 'assets/images/no-image.png')
    );
    this._gamesList.push(TTT);
    this._gamesList.push(TTT);
    this._gamesList.push(TTT);
    this._gamesList.push(TTT);
    this._gamesList.push(TTT);
    this._gamesList.push(TTT);
  }

  get gamesList(): GameClass[] {
    return this._gamesList;
  }
}
