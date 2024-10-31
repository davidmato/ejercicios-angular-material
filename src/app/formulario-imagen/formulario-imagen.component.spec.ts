import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioImagenComponent } from './formulario-imagen.component';

describe('FormularioImagenComponent', () => {
  let component: FormularioImagenComponent;
  let fixture: ComponentFixture<FormularioImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioImagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
