import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {UserConfigService} from '../../_services/user-config.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private userConfig: UserConfigService) { }

  ngOnInit() {
    this.userConfig.checkAuth();
  }
}
