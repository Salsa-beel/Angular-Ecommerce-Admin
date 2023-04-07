import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  constructor( private service : CartService, private build:FormBuilder) { }

  carts:any[]= [];
  products:any []=[]
  total:number=0;
  form!:FormGroup;  //reactive form
  details = {};



  ngOnInit() : void {

    this.form = this.build.group({

      start: [''],
      end:['']
    })
    
      this.getAllCarts()
    

  }

  getAllCarts(){
    this.service.getAllCarts().subscribe((res:any) =>{
      this.carts = res
    })

   
  }
  
  
  applyFilter(){
    let date = this.form.value
    this.service.getAllCarts(date).subscribe((res:any) =>{
      this.carts = res
    })

  }


  deleteCart(id:number){
    this.service.deleteCart(id).subscribe (res => {
      alert ("All the items has been deleted successfully")
    })
  }


view(index:number){
this.details = this.carts[index] // kda ana 5azent el item el ana dost 3aleh fe details
console.log(this.details)


}

}


  

  


