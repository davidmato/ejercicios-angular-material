import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NotasComponentComponent} from './notas-component/notas-component.component';
import {BrowserModule} from '@angular/platform-browser';
import {GaleriaComponent} from './galeria/galeria.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NotasComponentComponent, GaleriaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjerciciosAngularMaterial';
}
