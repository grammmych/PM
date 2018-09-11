import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private msg: ToastrService) { }

  ngOnInit() {
  }

  onToastrShow(msgText: string = 'No text'): void {
    this.msg.success(msgText);
  }
}
