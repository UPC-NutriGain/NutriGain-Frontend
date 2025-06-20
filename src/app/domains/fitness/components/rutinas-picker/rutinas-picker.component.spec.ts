import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasPickerComponent } from './rutinas-picker.component';

describe('RutinasPickerComponent', () => {
  let component: RutinasPickerComponent;
  let fixture: ComponentFixture<RutinasPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RutinasPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinasPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
