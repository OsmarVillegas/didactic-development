import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorLaboratorioMenuComponent } from './instructor-laboratorio-menu.component';

describe('InstructorLaboratorioMenuComponent', () => {
  let component: InstructorLaboratorioMenuComponent;
  let fixture: ComponentFixture<InstructorLaboratorioMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorLaboratorioMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorLaboratorioMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
