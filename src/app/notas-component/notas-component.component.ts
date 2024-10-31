import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Estudiante {
  nombre: string;
  nota: number;
  estado: string;
}

@Component({
  selector: 'app-notas-component',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './notas-component.component.html',
  styleUrls: ['./notas-component.component.css']
})
export class NotasComponentComponent {
  estudiantes: Estudiante[] = [
    { nombre: 'Felipe', nota: 6, estado: this.calcularEstado(6) },
    { nombre: 'Pedro', nota: 3, estado: this.calcularEstado(3) }
  ];

  displayedColumns: string[] = ['nombre', 'nota', 'estado'];
  filtrarNombre: string = '';
  filtrarEstado: string = '';

  estados = [
    { value: '', viewValue: 'Todos' },
    { value: 'aprobado', viewValue: 'Aprobado' },
    { value: 'suspenso', viewValue: 'Suspenso' }
  ];

  get filtrarEstudiantes(): Estudiante[] {
    return this.estudiantes.filter(estudiante => {
      return (!this.filtrarNombre || estudiante.nombre.toLowerCase().includes(this.filtrarNombre.toLowerCase())) &&
        (!this.filtrarEstado || estudiante.estado.toLowerCase().includes(this.filtrarEstado.toLowerCase()));
    });
  }

  calcularEstado(nota: number): string {
    return nota >= 5 ? 'aprobado' : 'suspenso';
  }

  anyadirEstudiante() {
    const nuevoEstudiante: Estudiante = { nombre: 'Juan', nota: 5, estado: this.calcularEstado(5) };
    this.estudiantes.push(nuevoEstudiante);
  }
}
