import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/shared/services/screen-size.service';

@Component({
  selector: 'app-auth-head',
  templateUrl: './auth-head.component.html',
  styleUrls: ['./auth-head.component.css']
})
export class AuthHeadComponent implements OnInit {
  isMobileScreen: boolean = false;
  isSidebarVisible: boolean = false;

  constructor(
    private screenSizeService: ScreenSizeService
  ) { }

  ngOnInit(): void {
    this.screenSizeService.isMobileScreen$.subscribe(isMobile => {
      this.isMobileScreen = isMobile;
    });
  }

  toggle() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
