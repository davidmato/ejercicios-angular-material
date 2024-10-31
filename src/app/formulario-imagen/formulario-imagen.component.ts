import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogoImagenComponent} from '../dialogo-imagen/dialogo-imagen.component';

@Component({
  selector: 'app-formulario-imagen',
  standalone: true,
  imports: [CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule],
  template: `
    <h1 mat-dialog-title>Añadir Nueva Imagen</h1>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>URL de la Imagen</mat-label>
        <input matInput [(ngModel)]="url">
      </mat-form-field>
      <mat-form-field>
        <mat-label>Descripción</mat-label>
        <input matInput [(ngModel)]="descripcion">
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="cancelar()">Cancelar</button>
      <button mat-button (click)="guardar()">Guardar</button>
    </div>
  `,
  styleUrl: './formulario-imagen.component.css'
})
export class FormularioImagenComponent {
  url: string = '';
  descripcion: string = '';

  constructor(public dialogRef: MatDialogRef<FormularioImagenComponent>) {}

  cancelar(): void {
    this.dialogRef.close();
  }

  guardar(): void {
    this.dialogRef.close({ url: this.url, descripcion: this.descripcion });
  }
}
