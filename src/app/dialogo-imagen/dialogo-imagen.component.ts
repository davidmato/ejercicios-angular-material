import {Component, Inject} from '@angular/core';
import {data} from 'autoprefixer';
import {CommonModule} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-imagen',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  template:`
    <h1 mat-dialog-title>{{data.descripcion}}</h1>
    <div mat-dialog-content>
      <img [src]="data.url" alt="{{data.descripcion}}" style="width: 100%;">
    </div>
  `,
  // templateUrl: './dialogo-imagen.component.html',
  styleUrl: './dialogo-imagen.component.css'
})
export class DialogoImagenComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { url: string, descripcion: string }) {}
}
