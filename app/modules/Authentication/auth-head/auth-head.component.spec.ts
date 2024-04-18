import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthHeadComponent } from './auth-head.component';

describe('AuthHeadComponent', () => {
  let component: AuthHeadComponent;
  let fixture: ComponentFixture<AuthHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthHeadComponent]
    });
    fixture = TestBed.createComponent(AuthHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
