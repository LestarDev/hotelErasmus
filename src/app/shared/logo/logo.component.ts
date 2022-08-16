import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setParaments();
  }

  @Input() heightLogo : number = 0;

  widthLogo : number = 0;

  fontSizeLogo : number = 0;

  ngOnChange(changes : SimpleChanges){
    this.setParaments();
  }
  
  setParaments(){
    this.widthLogo=this.heightLogo*3.8;
    this.fontSizeLogo=this.heightLogo*0.4;
  }
  

}
