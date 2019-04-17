import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardCenterComponentsLibComponent } from './reward-center-components-lib.component';

describe('RewardCenterComponentsLibComponent', () => {
  let component: RewardCenterComponentsLibComponent;
  let fixture: ComponentFixture<RewardCenterComponentsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardCenterComponentsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardCenterComponentsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
