import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmanagerComponent } from './loginmanager.component';

describe('LoginmanagerComponent', () => {
  let component: LoginmanagerComponent;
  let fixture: ComponentFixture<LoginmanagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginmanagerComponent]
    });
    fixture = TestBed.createComponent(LoginmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
