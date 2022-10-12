import { TestBed } from '@angular/core/testing';

import { AdministradorResolver } from './administrador.resolver';

describe('AdministradorResolver', () => {
  let resolver: AdministradorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AdministradorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
