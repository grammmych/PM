import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastr: ToastrService) {}

  onSuccess(msgText: string): void {
    this.toastr.success(msgText);
  }
  onError(msgText: string): void {
    this.toastr.error(msgText);
  }
  onWarning(msgText: string): void {
    this.toastr.warning(msgText);
  }
  onInfo(msgText: string): void {
    this.toastr.info(msgText);
  }
}
