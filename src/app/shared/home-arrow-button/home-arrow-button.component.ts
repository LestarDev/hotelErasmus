import { Component, OnInit, Input, HostListener } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home-arrow-button',
  templateUrl: './home-arrow-button.component.html',
  styleUrls: ['./home-arrow-button.component.scss'],
  animations: [
    trigger('showHide', [
      state('open', style({
        opacity: 0
      })),
      state('closed',style({
        opacity: 1
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ]
})


export class HomeArrowButtonComponent implements OnInit {

  constructor(){
    
  }

  ngOnInit(): void {
  }

  topPosition = window.pageYOffset;

  @Input() visible : boolean = true;

  unVisible(){
    window.scroll(0,0);
  }

  currentPosition = window.pageYOffset;
  @HostListener('window:scroll', ['$event.target']) // for window scroll events
  scroll(e : any) {

    let scroll = e.scrollingElement.scrollTop;

    this.visible = scroll < this.currentPosition && !(scroll <= 1);

    this.currentPosition = scroll;
  }

}
