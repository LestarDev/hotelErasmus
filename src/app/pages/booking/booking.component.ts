import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  arrayOfNumbers : number[] = [0];
  constructor() { }
  PriceOfCard : number = 0;
  ngOnInit(): void {
  }
  createNewCard( parm : boolean ) : void {
    if(parm){
      this.arrayOfNumbers[this.arrayOfNumbers.length] = 0;
      console.log(this.arrayOfNumbers)
    }
  }
  // git
  outputFunction(value : number): void{
    this.PriceOfCard += value;
  }
}
