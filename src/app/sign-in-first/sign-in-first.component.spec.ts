import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInFirstComponent } from './sign-in-first.component';

describe('SignInFirstComponent', () => {
  let component: SignInFirstComponent;
  let fixture: ComponentFixture<SignInFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
