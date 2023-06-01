import { Component, Input, OnInit, inject } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { apiReturnData } from '../models';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Input()
  email!: String;

  pizzaSvc = inject(PizzaService)
  router = inject(Router)


  bundle$!: Observable<apiReturnData>;

  apiReturn!: apiReturnData[]

  ngOnInit(): void {
    // this.bundle$ = this.pizzaSvc.getOrders(this.email)
  }

  Delivered() {
    this.pizzaSvc.delivered()
    // send for http request
  }
  
}
