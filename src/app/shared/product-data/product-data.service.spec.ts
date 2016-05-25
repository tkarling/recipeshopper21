import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ProductDataService } from './product-data.service';

describe('ProductData Service', () => {
  beforeEachProviders(() => [ProductDataService]);

  it('should ...',
      inject([ProductDataService], (service: ProductDataService) => {
    expect(service).toBeTruthy();
  }));
});
