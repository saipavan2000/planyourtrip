import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourtripsComponent } from './yourtrips.component';

describe('YourtripsComponent', () => {
  let component: YourtripsComponent;
  let fixture: ComponentFixture<YourtripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourtripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourtripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
