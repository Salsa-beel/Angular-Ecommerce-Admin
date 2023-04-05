import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
[x: string]: any;

cssClass = "btn btn-danger"

customers = [

  { ssn:"123312312",name:"Ahmed",age:15,gender:"male", children:["kamel","hadeer","lamis"]},
  { ssn:"123317612",name:"mariam",age:14,gender:"female", children:["kamel","hadeer","lamis"]},
  { ssn:"123343412",name:"mahmoud",age:35,gender:"male", children:["kamel","hadeer","lamis"]},
  { ssn:"189317612",name:"mariam",age:14,gender:"female", children:["kamel","hadeer","lamis"]},
  { ssn:"126343412",name:"zakaria",age:35,gender:"male", children:["kamel","hadeer","lamis"]},
  { ssn:"125317612",name:"sawsan",age:14,gender:"female", children:["kamel","hadeer","lamis"]},
  { ssn:"128363412",name:"kamel",age:35,gender:"male", children:["kamel","hadeer","lamis"]},
]

link = "https:www.google.com"

title  = "The store is opened"
number=0;
Names = ["hadeer" , "hadeer","hadeer","hadeer"]

changeTitle(){

  this.title = "www.google.com"

}

increment(){

  this.number += 1;

}

addName(){

  this.customers.push({ ssn:"128363412",name:"kamel",age:35,gender:"male",children:["kamel","hadeer","lamis"]});
  console.log(this.Names)

}

toggle = true;
text = "close" ;
changeToggle()
{
    this.toggle = !this.toggle;
    this.text = this.toggle?"close":"open";
}
get()
{
  return 5>6;
}

gender = true ;

// functions


}
