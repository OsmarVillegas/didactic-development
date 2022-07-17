import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorLaboratorioCrearComponent } from './instructor-laboratorio-crear.component';

describe('InstructorLaboratorioCrearComponent', () => {
  let component: InstructorLaboratorioCrearComponent;
  let fixture: ComponentFixture<InstructorLaboratorioCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorLaboratorioCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorLaboratorioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
