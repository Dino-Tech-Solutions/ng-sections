import { TestBed } from '@angular/core/testing';

import { NgSectionsService } from './ng-sections.service';

describe('NgSectionsService', () => {
  let service: NgSectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
