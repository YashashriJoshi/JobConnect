import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/shared/services/screen-size.service';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-head-toolbar',
  templateUrl: './head-toolbar.component.html',
  styleUrls: ['./head-toolbar.component.css']
})
export class HeadToolbarComponent implements OnInit {
  currentDateTime: any;
  isFullScreen: boolean = false;
  hover: any;
  isDarkTheme: any;
  themeButtonIcon: string = 'pi pi-moon';
  isMobileScreen: boolean = false;

  constructor(
    private themeService: ThemeService,
    private screenSizeService: ScreenSizeService
  ) { }

  ngOnInit(): void {
    this.updateDateTime();

    this.screenSizeService.isMobileScreen$.subscribe(isMobile => {
      this.isMobileScreen = isMobile;
    });

    const storedTheme = localStorage.getItem('app-theme');

    if (storedTheme) {
      this.themeService.toggleAppTheme(storedTheme);
      this.isDarkTheme = storedTheme === 'bootstrap4-dark-blue';
    } else {
      this.isDarkTheme = false;
      this.themeService.toggleAppTheme('bootstrap4-light-blue');
    }

    document.addEventListener('fullscreenchange', this.handleFullScreenChange.bind(this));
    document.addEventListener('webkitfullscreenchange', this.handleFullScreenChange.bind(this));
    document.addEventListener('mozfullscreenchange', this.handleFullScreenChange.bind(this));
    document.addEventListener('MSFullscreenChange', this.handleFullScreenChange.bind(this));
    setInterval(() => this.updateDateTime(), 1000);
  }

  private updateDateTime() {
    const now = new Date();
    this.currentDateTime = now.toLocaleString(); // Adjust the date format as needed
  }

  toggleFullScreen(): void {
    if (this.isFullScreen) {
      this.exitFullScreen();
    } else {
      this.requestFullScreen();
    }
  }

  requestFullScreen(): void {
    const docEl = document.documentElement;

    if (docEl.requestFullscreen) {
      docEl.requestFullscreen();
    } else {
      console.error('Fullscreen API is not supported');
    }

    this.isFullScreen = true;
  }

  exitFullScreen(): void {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else {
      console.error('Fullscreen API is not supported');
    }

    this.isFullScreen = false;
  }

  handleFullScreenChange(): void {
    this.isFullScreen = !!document.fullscreenElement;
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.setTheme();
    this.setThemeButtonProperties();
    localStorage.setItem('app-theme', this.isDarkTheme ? 'bootstrap4-dark-blue' : 'bootstrap4-light-blue');
  }

  setTheme() {
    var theme = this.isDarkTheme
      ? 'bootstrap4-dark-blue'
      : 'bootstrap4-light-blue';
    this.themeService.toggleAppTheme(theme);
  }

  setThemeButtonProperties(): void {
    if (this.isDarkTheme) {
      this.themeButtonIcon = 'pi pi-sun';
    } else {
      this.themeButtonIcon = 'pi pi-moon';
    }
  }

}
