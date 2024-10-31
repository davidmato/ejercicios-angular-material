import { Component } from '@angular/core';
import {DialogoImagenComponent} from '../dialogo-imagen/dialogo-imagen.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {FormularioImagenComponent} from '../formulario-imagen/formulario-imagen.component';


interface Imagen {
  url: string;
  descripcion: string;
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  imagenes: Imagen[] = [];

  filtrarDescripcion: string = '';

  constructor(public dialog: MatDialog) {}

  get imagenesFiltradas(): Imagen[] {
    return this.imagenes.filter(imagen =>
      imagen.descripcion.toLowerCase().includes(this.filtrarDescripcion.toLowerCase())
    );
  }

  abrirDialogo(imagen: Imagen): void {
    this.dialog.open(DialogoImagenComponent, {
      data: imagen
    });
  }

  abrirFormulario(): void {
    const dialogRef = this.dialog.open(FormularioImagenComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.imagenes.push(result);
      }
    });
  }
}
