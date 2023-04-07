import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
constructor(private http:HttpClient) { }

getAllCarts(param?:any){
  let params = new HttpParams()
  params = params.append("startdate", param?.start).append("endDate",param?.end)
  return this.http.get('https://fakestoreapi.com/carts',{params})

}

deleteCart(id:number){
  return this.http.delete('https://fakestoreapi.com/carts/'+ id)
}

}
