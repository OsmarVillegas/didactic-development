import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-laboratorio-crear',
  templateUrl: './instructor-laboratorio-crear.component.html',
  styleUrls: ['./instructor-laboratorio-crear.component.css']
})
export class InstructorLaboratorioCrearComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  mostrarAlerta:boolean = false

  show(): void {
    this.mostrarAlerta = true;
  }
}
