import { TestBed } from '@angular/core/testing';

import { ServicioeliminarService } from './servicioeliminar.service';



describe('ServicioeliminarService', () => {
  let service: ServicioeliminarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioeliminarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
