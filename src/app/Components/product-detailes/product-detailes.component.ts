import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.css']
})
export class ProductDetailesComponent implements OnInit {

id:any
data!: Product


  constructor(private route:ActivatedRoute , private service:ProductsService) {
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)


  }

  ngOnInit() {
    this.getProduct()
  }


  getProduct(){
    this.service.getProductsById(this.id).subscribe((res:any) => {
      this.data = res
    })

  }
}
