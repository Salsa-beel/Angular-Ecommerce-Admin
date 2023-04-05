import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailesComponent } from './Components/product-detailes/product-detailes.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  {path:'', redirectTo:'cart',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path: 'products' , component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'details/:id', component: ProductDetailesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

