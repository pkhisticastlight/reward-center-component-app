import { TestBed } from '@angular/core/testing';

import { RewardCenterComponentsLibService } from './reward-center-components-lib.service';

describe('RewardCenterComponentsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RewardCenterComponentsLibService = TestBed.get(RewardCenterComponentsLibService);
    expect(service).toBeTruthy();
  });
});
