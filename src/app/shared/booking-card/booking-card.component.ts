import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss']
})
export class BookingCardComponent implements OnInit {

  constructor() { }
  currentPriceOfCard : number = 0;
  PriceOfCard : number = 0;
  isDataOkay : boolean = true;
  typeInput : string = "text";
  daysNumber : number = 0;
  isCardActive : boolean = true;
  isActiveAddButton : boolean = true;
  // arriveData : number = 0;
  // departureData : number = 0;
  @Output() canICreateNewBookingCard = new EventEmitter<boolean>();

  // this.priceEmiter.emit(this.PriceOfCard);
  @Output() newItemEvent = new EventEmitter<number>();
  ngOnInit(): void {
  }
  changeType() : void{
    this.typeInput="date";
  }
  checkData(arriveData : string, departureData : string ) : void{
    if(arriveData=="" || departureData=="" || this.currentPriceOfCard==0){
      this.isDataOkay = false;
    }else{
      this.isDataOkay = true;
      this.canICreateNewBookingCard.emit(true);
      this.isActiveAddButton = false;
      let aDate = new Date(arriveData);
      let dDate = new Date(departureData);
      this.daysNumber = dDate.getTime() - aDate.getTime();
      this.daysNumber = this.daysNumber  / 1000 / 60 / 60 / 24;
      if (this.daysNumber<=0 ) {
        this.isDataOkay = false;
      }else{
        this.PriceOfCard = this.currentPriceOfCard*this.daysNumber;
        this.newItemEvent.emit(this.PriceOfCard);
      }
    }
  }
  getCurrentPrice( price : number) : void {
    this.currentPriceOfCard = price;
  }
  deleteRoom() : void {
    this.isCardActive = false;
  }

}
