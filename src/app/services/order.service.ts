import { Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OrderService {

  //Using AuthHttp has same interface has standard Http, and using it we don't need to write code to include headers,
  //it manages it all by itself. And we can comment the code below.
  constructor(private http: AuthHttp) {
  }

  getOrders() { 
    return this.http.get('/api/orders')
      .map(response => response.json());

      // let headers = new Headers();
      // let token = localStorage.getItem('token');
      // headers.append('Authorization', 'Bearer ' + token);

      // let options = new RequestOptions({ headers: headers});

      // return this.http.get('/api/orders', options)
      //   .map(response => response.json());
  }
}
