import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
categories: any;
filterCategory($event: Event) {
throw new Error('Method not implemented.');
}

@Input()title : string =""
@Input()data : any[]=[ ]
@Output()selectedValue =  new EventEmitter()

  constructor() { }

  ngOnInit() {
  }


  detectChanges(event : any) {
    this.selectedValue.emit(event)

  }

}
