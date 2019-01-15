import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {UserConfigService} from '../../_services/user-config.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private userConfig: UserConfigService) { }

  ngOnInit() {}

  OnAuth() {}
}
