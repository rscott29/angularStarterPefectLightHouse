import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  bgImagePath = '';
  constructor(
    private router: Router,
    private deviceService: DeviceDetectorService
  ) {}

  ngOnInit() {
    const browser = this.deviceService.browser;
    // currently wepb images only supported in Chrome and Edge, fall back to jpg if not.
    if (browser === 'Chrome' || browser === 'Edge') {
      this.bgImagePath = '../../../assets/images/background.webp';
    } else {
      this.bgImagePath = '../../../assets/images/background.jpg';
    }
  }

  login() {
    this.router.navigate(['/feature1']);
  }
}
