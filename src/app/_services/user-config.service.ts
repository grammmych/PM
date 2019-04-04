import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {IApiMessage, IUserConfig} from '../app.types';
import {MessageService} from './message.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {

  private _user: IUserConfig | null = null;

  constructor(private router: Router, private msg: MessageService, private http: HttpClient) {
    this.initUserConfig();
  }

  private initUserConfig(): void {

    this.http.get('api/auth/get_user_config').subscribe((response: IApiMessage) => {
      if (!response.error) {
        this._user = (this.checkUserConfigData(response.data)) ? response.data : null;
      }
    });
  }

  public isAuth(): boolean {
    return (this._user !== null);
  }

  get username() {
    if (!this.isAuth()) {
      return null;
    }
    return this._user.name;
  }

  public checkAuth(): boolean {
    return this.isAuth();
  }

  public authentication(username: string, passwd: string): Observable<{}> {
    return this.http.post('api/auth', {});
  }

  public logout(): void {
    this._user = null;
    this.redirectTo('/');
  }

  public redirectTo(ulr: string): void {
    const arrUrl = ulr.split('/');
    this.router.navigate(arrUrl);
  }

  private checkUserConfigData(userConfig: IUserConfig): boolean {
    let r = true;
    if (!('name' in userConfig)) {
      r = false;
    }
    return r;
  }
}
