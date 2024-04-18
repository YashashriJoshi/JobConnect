import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadToolbarComponent } from './head-toolbar.component';

describe('HeadToolbarComponent', () => {
  let component: HeadToolbarComponent;
  let fixture: ComponentFixture<HeadToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadToolbarComponent]
    });
    fixture = TestBed.createComponent(HeadToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
