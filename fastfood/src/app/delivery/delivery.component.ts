import { Component, Input } from '@angular/core';
import { Pedido } from '../models/pedido';
import { CommonModule } from '@angular/common';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent {
  @Input() pedidoingresado: Pedido[] = [];
  constructor(private pedSer: PedidosService) {}
  terminar(i:number, nombre:string){
    this.pedSer.deleteterm(i)
    alert('su pedido comenzao viaje a ser entregado a: '+nombre)
    this.pedidoingresado = this.pedSer.getAlldel()
  }
}
