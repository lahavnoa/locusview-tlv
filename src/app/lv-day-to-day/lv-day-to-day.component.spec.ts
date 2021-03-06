import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvDayToDayComponent } from './lv-day-to-day.component';

describe('LvDayToDayComponent', () => {
  let component: LvDayToDayComponent;
  let fixture: ComponentFixture<LvDayToDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvDayToDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvDayToDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
