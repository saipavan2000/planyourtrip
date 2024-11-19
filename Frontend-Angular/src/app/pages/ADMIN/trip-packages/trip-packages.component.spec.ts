import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPackagesComponent } from './trip-packages.component';

describe('TripPackagesComponent', () => {
  let component: TripPackagesComponent;
  let fixture: ComponentFixture<TripPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripPackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
