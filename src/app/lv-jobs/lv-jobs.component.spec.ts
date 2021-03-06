import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvJobsComponent } from './lv-jobs.component';

describe('LvJobsComponent', () => {
  let component: LvJobsComponent;
  let fixture: ComponentFixture<LvJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
