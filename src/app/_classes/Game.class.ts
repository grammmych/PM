export class GameClass {
  private _gameInfo: GameInfoClass;

  constructor(info: GameInfoClass) {
    this._gameInfo = info;
  }

  get gameInfo() {
    return this._gameInfo;
  }
}


export class GameInfoClass {
  private readonly _name: string;
  private readonly _description: string;
  private readonly _imgPath: string|null;

  constructor(name: string, description: string, imgPath: string = null) {
    this._name = name;
    this._description = description;
    this._imgPath = imgPath;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get imagePath() {
    return this._imgPath;
  }
}
