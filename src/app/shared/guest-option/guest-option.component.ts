import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookingOptionInterface } from 'src/app/core/interfaces/booking-option-interface';

@Component({
  selector: 'app-guest-option',
  templateUrl: './guest-option.component.html',
  styleUrls: ['./guest-option.component.scss']
})
export class GuestOptionComponent implements OnInit {

  constructor() { }
  @Output() changePrice = new EventEmitter<number>();

  ngOnInit(): void {
  }
  avaibleRooms : BookingOptionInterface[] = [
    {name : 'one person', price : 50},
    {name : 'room for two', price : 70},
    {name : 'room for three', price : 100},
  ];
  onChange( option : any) : void {
    let currentOption = option.value;
    this.avaibleRooms.forEach(( element : BookingOptionInterface )=>{
      if(element.name === currentOption){
        this.changePrice.emit(element.price);
        console.log(element.price);
      }
    })
  }
}
