import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {MessageService} from './_services/message.service';
import {IApiMessage} from './app.types';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor(private msgService: MessageService) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((response: HttpResponse<any>) => {
        if (response.type === 4) {
          if ('result' in response.body) {
            if (!response.body['result']) {
              this.msgService.onError(response.body['data']['error']);
            }
          } else {
            console.log('Incorrect Response: ', response.body);
            // response.body = <IApiMessage>{
            //   result: false,
            //   data: {error: 'API Error: Incorrect response'}
            // };
          }
        }
      }, error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.msgService.onError('msg.error.app.sessionExpire');
          } else {
            this.msgService.onError(error.message);
          }
        }
      })
    );
  }
}
