import { Observable, lastValueFrom, map, tap } from 'rxjs';
import { apiReturnData, orderData, returnData } from './models';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const URL = 'http://localhost:8080';

@Injectable()
export class PizzaService {
  http = inject(HttpClient);

  // TODO: Task 3
  // You may add any parameters and return any type from placeOrder() method
  // Do not change the method name
  placeOrder(data: orderData): Promise<returnData> {
    return lastValueFrom(this.http.post<returnData>(`${URL}/api/order`, data));
  }

  // TODO: Task 5
  // You may add any parameters and return any type from getOrders() method
  // Do not change the method name
  getOrders(email: string) : Observable<apiReturnData[]> {

    return this.http.get<apiReturnData[]>(`${URL}/orders/${email}`)

    // thought have to do the orderSvc from .ts from task 5
    // const form = new HttpParams() // Content-Type: application/x-www-form-urlencoded, need to set payload
    //   .set('name', data.min)
    //   .set('email', data.max)
    //   .set('sauce', data.count)
    //   .set('size', data.count)
    //   .set('thickCrust', data.count)
    //   .set('toppings', data.count)
    //   .set('comments', data.count);

    // const headers = new HttpHeaders().set(
    //   'Content-Type',
    //   'application/x-www-form-urlencoded'
    // );

    // return this.http
    //   .post<string>(
    //     'https://pizza-pricing-production.up.railway.app/order',
    //     form.toString(),
    //     { headers }
    //   )
    //   .pipe(
    //     map((response: string) => {
    //       const responseParts = response.split(',');

    //       if (responseParts.length === 3) {
    //         const data: apiReturnData = {
    //           orderId: responseParts[0].trim(),
    //           date: responseParts[1].trim(),
    //           total: responseParts[2].trim(),
    //         };
    //         return data;
    //       } else {
    //         return null;
    //       }
    //     })
    //   );
  }

  // TODO: Task 7
  // You may add any parameters and return any type from delivered() method
  // Do not change the method name
  delivered() {}
}
