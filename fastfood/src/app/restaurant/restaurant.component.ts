import { Component } from '@angular/core';
import { DeliveryComponent } from "../delivery/delivery.component";
import { POSComponent } from "../pos/pos.component";
import { KitchenComponent } from "../kitchen/kitchen.component";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [DeliveryComponent, POSComponent, KitchenComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

}
