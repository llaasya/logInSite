import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispUsersComponent } from './disp-users.component';

describe('DispUsersComponent', () => {
  let component: DispUsersComponent;
  let fixture: ComponentFixture<DispUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
