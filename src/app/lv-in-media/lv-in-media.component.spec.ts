import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvInMediaComponent } from './lv-in-media.component';

describe('LvInMediaComponent', () => {
  let component: LvInMediaComponent;
  let fixture: ComponentFixture<LvInMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvInMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvInMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
