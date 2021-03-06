import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvFooterComponent } from './lv-footer.component';

describe('LvFooterComponent', () => {
  let component: LvFooterComponent;
  let fixture: ComponentFixture<LvFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
