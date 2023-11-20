import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ORDER_CREATE_URL, ORDER_NEW_FOR_CURRENT_USER_URL } from '../shared/constants/urls';
import { Order } from '../shared/models/Order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private http: HttpClient) { }

  create(order:Order){
    return this.http.post<Order>(ORDER_CREATE_URL, order);
  }

  getNewOrderForCurrentUser():Observable<Order>{
    return this.http.get<Order>(ORDER_NEW_FOR_CURRENT_USER_URL);
  }
  
}
