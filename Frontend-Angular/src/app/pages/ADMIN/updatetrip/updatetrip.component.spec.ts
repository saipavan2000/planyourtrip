import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetripComponent } from './updatetrip.component';

describe('UpdatetripComponent', () => {
  let component: UpdatetripComponent;
  let fixture: ComponentFixture<UpdatetripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
