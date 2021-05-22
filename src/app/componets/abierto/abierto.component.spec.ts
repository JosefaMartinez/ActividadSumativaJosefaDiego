import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiertoComponent } from './abierto.component';

describe('AbiertoComponent', () => {
  let component: AbiertoComponent;
  let fixture: ComponentFixture<AbiertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbiertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
