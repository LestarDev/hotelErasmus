import { Component, Output, EventEmitter, OnInit } from '@angular/core';

interface ElementCon {
  index : number,
  content : string,
  class : string
}

@Component({
  selector: 'app-slider-comments',
  templateUrl: './slider-comments.component.html',
  styleUrls: ['./slider-comments.component.scss']
})
export class SliderCommentsComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    for(let i=3; i>0; i--){
      this.tabStart.push({index : i , content : `${i} Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam`, class : ''})
    }

    for(let j=5; j<7; j++){
      this.tabEnd.push({index: j, content : `${j} Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam`, class: ''})
    }
  }


  @Output() isTouchedEvent = new EventEmitter<boolean>();

  tabStart : ElementCon[] = [];

  tabEnd : ElementCon[] = [];

  current : ElementCon = {index : 4, content : `4 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam`, class:''};

  currentIndex : number = 1;

  touchStart : number = 0;

  isTouched(e : any){
    this.isTouchedEvent.emit(true);
  }

  clearClass(e : any){
    this.current.class='';
  }

  moveRight(){

      this.tabEnd.unshift(this.current);
      this.tabStart.push(this.tabEnd[2]);
      this.current=this.tabStart[0];
      this.tabStart.shift();
      this.tabEnd.pop();

      this.current.class='animationLeftTrue';
  }

  moveLeft(){
    this.tabStart.unshift(this.current);
      this.tabEnd.push(this.tabStart[3]);
      this.current=this.tabEnd[0];
      this.tabEnd.shift();
      this.tabStart.pop();
      
      this.current.class='animationRightTrue';
  }

  onTouchStart(event:TouchEvent){
    this.touchStart=event.touches[0].clientX;
  }

  onTouchEnd(event : TouchEvent){

    if((this.touchStart-event.changedTouches[0].clientX)>0){
      this.moveLeft()
      this.isTouched(true);
    }else{
      this.moveRight()
      this.isTouched(true);
    }

  }

}