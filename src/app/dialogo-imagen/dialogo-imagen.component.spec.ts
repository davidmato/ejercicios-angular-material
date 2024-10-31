import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoImagenComponent } from './dialogo-imagen.component';

describe('DialogoImagenComponent', () => {
  let component: DialogoImagenComponent;
  let fixture: ComponentFixture<DialogoImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoImagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
