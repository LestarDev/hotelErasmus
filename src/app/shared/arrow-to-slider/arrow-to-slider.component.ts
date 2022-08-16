import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-arrow-to-slider',
  templateUrl: './arrow-to-slider.component.html',
  styleUrls: ['./arrow-to-slider.component.scss']
})
export class ArrowToSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.change_arrow();
  }

  @Input() is_icon_right : boolean = true;

  arrow_name : string = "arrow_forward_ios";

  @Input() arrow_width : number = 6;

  @Output() isClicked = new EventEmitter<boolean>();

  onClick() : void{
    this.isClicked.emit(true);
  }

  change_arrow() : void{
    this.is_icon_right ? this.arrow_name="arrow_forward_ios" : this.arrow_name="arrow_back_ios";
  }

}
