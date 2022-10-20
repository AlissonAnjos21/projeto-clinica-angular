import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorDeleteDialogComponent } from './administrador-delete-dialog.component';

describe('AdministradorDeleteDialogComponent', () => {
  let component: AdministradorDeleteDialogComponent;
  let fixture: ComponentFixture<AdministradorDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
