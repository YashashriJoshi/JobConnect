import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHiringRequestComponent } from './create-hiring-request.component';

describe('CreateHiringRequestComponent', () => {
  let component: CreateHiringRequestComponent;
  let fixture: ComponentFixture<CreateHiringRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHiringRequestComponent]
    });
    fixture = TestBed.createComponent(CreateHiringRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
