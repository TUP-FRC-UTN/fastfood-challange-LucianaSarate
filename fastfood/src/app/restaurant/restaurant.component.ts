import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeliveryComponent } from "../delivery/delivery.component";
import { POSComponent } from "../pos/pos.component";
import { KitchenComponent } from "../kitchen/kitchen.component";
import { PedidosService } from '../services/pedidos.service';
import { Pedido } from '../models/pedido';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [DeliveryComponent, POSComponent, KitchenComponent, CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnInit{
  pedidonotocar: Pedido[] = [];
  pedido: Pedido[] = [];
  @Input() pedidoingresado: Pedido = { number: 0, name: '', description: '', date: new Date() };

  @Input() terminar: Pedido = { number: 0, name: '', description: '', date: new Date() };

  @Output() finalizar : Pedido []= []

  constructor(private pedSer: PedidosService) {}

  ngOnInit(): void {
    this.pedidonotocar = this.pedSer.getAll();
  }

  onPedidoRecibido(pedido: Pedido) {
    this.pedidoingresado = pedido;
    this.pedSer.add(this.pedidoingresado);
    this.pedidonotocar = this.pedSer.getAll();
    this.pedido = this.pedSer.getAllterminados();
  }

  onPedidoCocinado(pedido: Pedido) {
    this.terminar = pedido;
    this.finalizar = this.pedSer.getAlldel()
    this.pedido = this.pedSer.getAllterminados();
    console.log('terminado', this.terminar, 'pedidoingresado',this.pedidoingresado)
  }


}
