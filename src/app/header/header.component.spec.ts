import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvHeaderComponent} from './header.component';

describe('LvHeaderComponent', () => {
  let component: LvHeaderComponent;
  let fixture: ComponentFixture<LvHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
