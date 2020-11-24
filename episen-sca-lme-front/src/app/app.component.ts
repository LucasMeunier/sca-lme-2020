import { Component } from '@angular/core';
import {OrderDTO} from './dto/OrderDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from './service/OrderService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  response: String;
  input = '';

  constructor(private orderService: OrderService) { }

  launchRegistration(text) {
    this.input = text;
    this.orderService.postOrder(text).subscribe(data =>
      this.response = data);
  }

  onSubmit() {

  }
}
