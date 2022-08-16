import { Component, Input, OnInit, HostListener} from '@angular/core';
import { listElementInterface } from 'src/app/core/interfaces/listElementInterface';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() htmlElement : any = '';
  contentOfListElementArray : listElementInterface[] = [
    {content : 'Home', direction : '/home'},
    {content : 'About', direction : 'home#about'},
    {content : 'Opinions', direction : 'home#opinions'},
    {content : 'Location', direction : 'home#location'},
    {content : 'Booking', direction : '/booking'},

  ];
  isScroll : boolean = false;
  @HostListener('window:scroll', ['$event.target'])
  scroll(event:any):void {
    let scrollPosition = event.scrollingElement.scrollTop;
    if(scrollPosition!=0){
      this.isScroll=true;
    }else{
      this.isScroll=false;
    }
  }

  isBtnClicked : boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }
  onClick(): void{
    this.isBtnClicked = !this.isBtnClicked;
  }
  onChange(): void{
    this.isBtnClicked = !this.isBtnClicked;


  } 
}