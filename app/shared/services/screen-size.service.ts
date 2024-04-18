import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScreenSizeService {
    private isMobileScreenSubject = new BehaviorSubject<boolean>(false);
    isMobileScreen$ = this.isMobileScreenSubject.asObservable();

    constructor() {
        this.checkIsMobileScreen();
        window.addEventListener('resize', () => {
            this.checkIsMobileScreen();
        });
    }

    private checkIsMobileScreen() {
        this.isMobileScreenSubject.next(window.innerWidth <= 768);
    }
}
