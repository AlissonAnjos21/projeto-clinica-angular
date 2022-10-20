import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteSearchComponent } from './paciente-search.component';

describe('PacienteSearchComponent', () => {
  let component: PacienteSearchComponent;
  let fixture: ComponentFixture<PacienteSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
