import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ver-saldo',
  templateUrl: './ver-saldo.component.html',
  styleUrls: ['./ver-saldo.component.css']
})
export class VerSaldoComponent {
  @Input() ingresos: number = 0;
  @Input() gastos: number = 0;

  get balance(): number {
    return this.ingresos - this.gastos;
  }
}