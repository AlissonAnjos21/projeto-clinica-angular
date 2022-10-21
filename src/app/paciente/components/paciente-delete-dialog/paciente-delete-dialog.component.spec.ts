import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteDeleteDialogComponent } from './paciente-delete-dialog.component';

describe('PacienteDeleteDialogComponent', () => {
  let component: PacienteDeleteDialogComponent;
  let fixture: ComponentFixture<PacienteDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
