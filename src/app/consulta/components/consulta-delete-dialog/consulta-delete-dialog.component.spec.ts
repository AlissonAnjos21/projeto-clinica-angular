import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDeleteDialogComponent } from './consulta-delete-dialog.component';

describe('ConsultaDeleteDialogComponent', () => {
  let component: ConsultaDeleteDialogComponent;
  let fixture: ComponentFixture<ConsultaDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
