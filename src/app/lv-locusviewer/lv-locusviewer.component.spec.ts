import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvLocusviewerComponent } from './lv-locusviewer.component';

describe('LvLocusviewerComponent', () => {
  let component: LvLocusviewerComponent;
  let fixture: ComponentFixture<LvLocusviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvLocusviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvLocusviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
