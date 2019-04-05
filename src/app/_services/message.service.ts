import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastr: ToastrService) {}

  onSuccess(msgText: string, titleText: string = null): void {
    this.toastr.success(msgText, titleText, { timeOut: 2000 });
  }
  onError(msgText: string, titleText: string = null): void {
    this.toastr.error(msgText, titleText, { timeOut: 5000 });
  }
  onWarning(msgText: string, titleText: string = null): void {
    this.toastr.warning(msgText, titleText, { timeOut: 4000 });
  }
  onInfo(msgText: string, titleText: string = null): void {
    this.toastr.info(msgText, titleText, { timeOut: 3000 });
  }
}
