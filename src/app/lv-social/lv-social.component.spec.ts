import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvSocialComponent } from './lv-social.component';

describe('LvSocialComponent', () => {
  let component: LvSocialComponent;
  let fixture: ComponentFixture<LvSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
