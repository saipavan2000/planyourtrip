import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTripPackagesComponent } from './user-trip-packages.component';

describe('UserTripPackagesComponent', () => {
  let component: UserTripPackagesComponent;
  let fixture: ComponentFixture<UserTripPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTripPackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTripPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
