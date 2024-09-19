import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pedido } from '../models/pedido';
import { CommonModule } from '@angular/common';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [
    CommonModule  ],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  @Input() pedidoingresado : Pedido [] =[]
  cocinando : Pedido = { number: 0, name: '', description: '', date: new Date() };
  botonDeshabilitado: boolean = false;
  Cocion: boolean = false;
  @Output() pedido: EventEmitter<Pedido> = new EventEmitter<Pedido>();


  constructor(private pedSer: PedidosService) {}

  COcinar(pedido:Pedido, i : number){
      this.cocinando = pedido
      this.botonDeshabilitado = true
      this.Cocion = true
      this.pedSer.delete(i,pedido)
    
  }
  terminar(){
    this.botonDeshabilitado = false
    this.Cocion= false
    this.pedido.emit(this.cocinando);
  }


}
