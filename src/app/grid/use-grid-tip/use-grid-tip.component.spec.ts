import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseGridTipComponent } from './use-grid-tip.component';

describe('UseGridTipComponent', () => {
  let component: UseGridTipComponent;
  let fixture: ComponentFixture<UseGridTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseGridTipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseGridTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
