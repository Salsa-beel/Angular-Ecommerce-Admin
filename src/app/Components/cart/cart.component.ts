import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
constructor( private service : CartService) { }
carts:any[]= [];

ngOnInit() : void {
    this.getAllCarts()
}
  getAllCarts(){
    this.service.getAllCarts().subscribe((res:any)=> {
      this.carts =  res
    })
  }
}
