import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { CartService } from 'src/app/service/cart.service';
import { JsonPipe } from '@angular/common';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

products : Product [] = [];
categories :string[]=[];
grandTotal: any;
cartProducts:any[] = []; // 3ayza ageb el data mn local storage w a7otaha fe array esmo cart fa hena 3arft el array

  constructor( private service :ProductsService, private cartService :CartService ) { }

  ngOnInit():void {
    this.getAllProducts()
    this.getCategories()
  }


  addtoCart(event: any){


    //  JSON.stringify() //Send Data zy ma ana b3etha bzabt
    //  JSON.parse()  //receive Data zy ma ana b3etha bzabt
    if ("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!) // hena my3rfsh eh el cart de asln mwgoda wla la fel local storage 3ashan ygeb mnha el data
      let exist = this.cartProducts.find(item => item.item.id == event.item.id) // lw l2et ay item = el event id 5azeno fel exist
      if(exist){
        alert(" Product is already in your cart")
      }else {
        this.cartProducts.push(event) // hena b push el products el 3ayzaha fel cart
        localStorage.setItem("cart", JSON.stringify(this.cartProducts)) //  hena b send kol el fel cart zy ma hwa mn gher tagheer
        }
     }
      else {
        this.cartProducts.push(event) // hena b push el products el 3ayzaha fel cart
      localStorage.setItem("cart", JSON.stringify(this.cartProducts)) //  hena b send kol el fel cart zy ma hwa mn gher tagheer

      }

  }






  getAllProducts(){
    this.service.getAllProducts().subscribe((res:any)=>{

    this.products=res // kol da fe 7alet el success
  }, error =>{
    alert("Error") // da fe 7alet el error
  }     )
  }


  getCategories(){
    this.service.getAllCategories().subscribe((res:any)=>{
      console.log(res)
    this.categories=res  // kol da fe 7alet el success
    })
  // }, error =>{
  //   alert("Error") // da fe 7alet el error
  // }     )
  }

  filterCategory(event : any) {

    let value = event.target.value;
    if(value == "all")
    {
      this.getAllProducts()
    } else {
      this.getProductsCategory(value)
    }

  }

  AllCategory(event : any) {

    let value = event.target.value;
    this.getProductsCategory(value)

  }

  getProductsCategory(keyword : string){

    this.service.getProductsByCategory(keyword).subscribe( (res: any) =>{
      this.products = res

    })
  }



}
