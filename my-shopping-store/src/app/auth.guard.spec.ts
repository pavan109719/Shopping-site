import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { ProductsService } from './products.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers:[ProductsService,HttpClientModule]
    
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
})