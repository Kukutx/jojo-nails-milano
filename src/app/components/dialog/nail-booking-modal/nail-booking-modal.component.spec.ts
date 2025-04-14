import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailBookingModalComponent } from './nail-booking-modal.component';

describe('NailBookingModalComponent', () => {
  let component: NailBookingModalComponent;
  let fixture: ComponentFixture<NailBookingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NailBookingModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NailBookingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
