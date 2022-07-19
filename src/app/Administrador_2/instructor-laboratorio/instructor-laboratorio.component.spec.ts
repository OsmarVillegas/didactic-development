import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorLaboratorioComponent } from './instructor-laboratorio.component';

describe('InstructorLaboratorioComponent', () => {
  let component: InstructorLaboratorioComponent;
  let fixture: ComponentFixture<InstructorLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorLaboratorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
