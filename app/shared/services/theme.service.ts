import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    // Retrieve the current sql editor theme from local storage or use a default
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.applyTheme();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.currentTheme);
    this.applyTheme();
  }

  private applyTheme() {
    document.body.setAttribute('data-theme', this.currentTheme);
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }

  toggleAppTheme(theme: string) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css'; //bundle name from angular.json file
      window.dispatchEvent(new Event('themeChanged'));
    }
  }
}
