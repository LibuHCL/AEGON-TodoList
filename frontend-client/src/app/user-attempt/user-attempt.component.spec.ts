import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAttemptComponent } from './user-attempt.component';

describe('UserAttemptComponent', () => {
  let component: UserAttemptComponent;
  let fixture: ComponentFixture<UserAttemptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAttemptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAttemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
