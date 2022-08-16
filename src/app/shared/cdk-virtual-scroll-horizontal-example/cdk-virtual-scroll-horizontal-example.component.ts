import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ViewChildren, ViewChild, Input, AfterViewInit } from '@angular/core';
import { SliderCommentsComponent } from '../slider-comments/slider-comments.component';

@Component({
  selector: 'app-cdk-virtual-scroll-horizontal-example',
  templateUrl: './cdk-virtual-scroll-horizontal-example.component.html',
  styleUrls: ['./cdk-virtual-scroll-horizontal-example.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkVirtualScrollHorizontalExampleComponent implements AfterViewInit {

  @ViewChild(SliderCommentsComponent) child !: SliderCommentsComponent;

  constructor() { 
    
  }

  ngAfterViewInit(): void {
    
  }

  indexs = [1,2,3,4,5,6];

  @Input() thisIndex : number = 4;  

  isArrowsVisible : boolean = true;

  setIndex(data : any){
    this.thisIndex=this.child.current.index;
  }

  onResize(event : any){
    
    (event.target.screen.width>=767) ?
    
      this.isArrowsVisible=false
    :
      this.isArrowsVisible=true;


  }

  move(event : boolean){
    event ? this.child.moveLeft() : this.child.moveRight()

    this.setIndex(true);
  }

  

}
