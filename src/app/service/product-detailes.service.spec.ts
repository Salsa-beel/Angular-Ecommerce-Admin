/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductDetailesService } from './product-detailes.service';

describe('Service: ProductDetailes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDetailesService]
    });
  });

  it('should ...', inject([ProductDetailesService], (service: ProductDetailesService) => {
    expect(service).toBeTruthy();
  }));
});
