import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvPropertiesComponent } from './lv-properties.component';

describe('LvPropertiesComponent', () => {
  let component: LvPropertiesComponent;
  let fixture: ComponentFixture<LvPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
