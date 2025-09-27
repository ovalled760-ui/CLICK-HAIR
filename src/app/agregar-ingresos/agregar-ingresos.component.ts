import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-ingresos',
  imports: [],
  templateUrl: './agregar-ingresos.component.html',
  styleUrl: './agregar-ingresos.component.css'
})
export class AgregarIngresosComponent {
  monto: number | null = null;
  descripcion: string = '';
  ingresos: { descripcion: string, monto: number }[] = [];

  agregarIngreso() {
    if(this.monto && this.descripcion) {
      this.ingresos.push({ descripcion: this.descripcion, monto: this.monto });
      this.monto = null;
      this.descripcion = '';
    }
  }
}
