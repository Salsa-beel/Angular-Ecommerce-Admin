import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-OneProduct',
  templateUrl: './OneProduct.component.html',
  styleUrls: ['./OneProduct.component.css']
})
export class OneProductComponent implements OnInit {

  @Input() data! :Product
  @Output() item =  new EventEmitter()
  addButton:boolean = false;
  amount:number=0;
  constructor() { }

  ngOnInit() {
  }

  add(){
    this.item.emit({item:this.data, quantity: this.amount})

  }

}
