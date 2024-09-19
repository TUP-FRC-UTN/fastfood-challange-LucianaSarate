import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private pedidos : Pedido[]=[]

constructor() { }

getAll(): Pedido[] {
  return [
    ...this.pedidos 
  ];
}
add(pedidos: Pedido) {
  this.pedidos.push(pedidos);
  this.cocinando.push(pedidos);
}

private cocinando: Pedido[] = [];
private termiandos: Pedido[] = [];

delete(index: number, p:Pedido) {
  this.cocinando.splice(index, 1);
  this.termiandos.push(p)
}


getAllterminados(): Pedido[]{
  return [
    ...this.cocinando 
  ];
}
getAlldel(): Pedido[]{
  return [
    ...this.termiandos 
  ];
}

deleteterm(index: number) {
  this.termiandos.splice(index, 1);

}



}
