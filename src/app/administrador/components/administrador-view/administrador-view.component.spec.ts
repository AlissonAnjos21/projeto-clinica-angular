import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorViewComponent } from './administrador-view.component';

describe('AdministradorViewComponent', () => {
  let component: AdministradorViewComponent;
  let fixture: ComponentFixture<AdministradorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
