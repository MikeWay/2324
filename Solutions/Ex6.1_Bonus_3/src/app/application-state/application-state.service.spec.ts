import { TestBed } from '@angular/core/testing';
import { FLIGHTS } from '../model/mock-flights';

import { ApplicationStateService } from './application-state.service';

describe('ApplicationStateService', () => {
  let service: ApplicationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationStateService]
    });
    service = TestBed.inject(ApplicationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
