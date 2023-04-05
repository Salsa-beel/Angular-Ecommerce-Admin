import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
constructor(private http:HttpClient) { }

getAllCarts(){

  return this.http.get('https://fakestoreapi.com/carts/')
}

}
