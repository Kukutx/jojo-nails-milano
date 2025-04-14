import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBackgroudComponent } from './home-backgroud.component';

describe('HomeBackgroudComponent', () => {
  let component: HomeBackgroudComponent;
  let fixture: ComponentFixture<HomeBackgroudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBackgroudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBackgroudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
