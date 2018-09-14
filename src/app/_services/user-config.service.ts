import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {IUserConfig} from '../app.types';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {

  private _user: IUserConfig|null;

  constructor(private router: Router, private msg: MessageService) {
    this._user = null;

    // Test data
    this._user = {
      name: 'SerYogA',
      token: this.generateToken()
    };
  }

  public isAuth(): boolean {
    return (this._user !== null);
  }

  get username() {
    if (!this.isAuth()) { return null; }
    return this._user.name;
  }

  get token() {
    if (!this.isAuth()) { return null; }
    return this._user.token;
  }

  public checkAuth(): void {
    if (!this.isAuth()) {
      this.router.navigate(['auth']);
    }
  }

  public authentication(username: string): boolean {
    if (username === 'undefined' || username.trim() === '') {
      this.msg.onError('Incorrect `Username`');
      return false;
    }
    this._user = {
      token: this.generateToken(),
      name: username
    };
    return true;
  }

  public logout(): void {
    this._user = null;
    this.redirectTo('auth');
  }

  private generateToken(): string {
    let result = '';
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 32; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  public redirectTo(ulr: string): void {
    const arrUrl = ulr.split('/');
    this.router.navigate(arrUrl);
  }
}
