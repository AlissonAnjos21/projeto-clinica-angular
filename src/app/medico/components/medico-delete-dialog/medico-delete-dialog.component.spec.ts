import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoDeleteDialogComponent } from './medico-delete-dialog.component';

describe('MedicoDeleteDialogComponent', () => {
  let component: MedicoDeleteDialogComponent;
  let fixture: ComponentFixture<MedicoDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
