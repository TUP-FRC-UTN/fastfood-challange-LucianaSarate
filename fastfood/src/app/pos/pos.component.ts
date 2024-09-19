import { Component, EventEmitter , Output } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { FormsModule } from '@angular/forms';
import { Pedido } from '../models/pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule
    , FormsModule,],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {
  @Output() pedido: EventEmitter<Pedido> = new EventEmitter<Pedido>();

  nombre: string = '';
  descripcion: string = '';

  enviar() {
    const nuevoPedido: Pedido = {
      number: Math.floor(Math.random() * 1000) + 1, 
      name: this.nombre,
      description: this.descripcion,
      date: new Date()
    };

    this.pedido.emit(nuevoPedido); 
  }
}
