import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { RestService } from './rest.service';
import {OrderDTO} from '../dto/OrderDTO';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class OrderService extends RestService {
  constructor(protected http: HttpClient) {
    super('order', http);
  }

  postOrder(text: String): Observable<String> {
    return this.http.post<String>(`${this.baseUrl}/add/order?text=` + text, text);

  }
}
