import { Component, OnInit } from '@angular/core';
import { image } from 'src/app/core/interfaces/image';

@Component({
  selector: 'app-slider-vertical',
  templateUrl: './slider-vertical.component.html',
  styleUrls: ['./slider-vertical.component.scss']
})
export class SliderVerticalComponent implements OnInit {

  constructor() { }

  private interval: any;

  images: image[] = [
    {id: 0, imageSrc: "./assets/imgs/hotel.jpg", isActive: true, header: "7:30", content: "Lorem ipsum"},
    {id: 1, imageSrc: "./assets/imgs/hotel1.jpg", isActive: false, header: "12:45", content: "Lorem ipsum"},
    {id: 2, imageSrc: "./assets/imgs/hotel2.jpg", isActive: false, header: "14:50", content: "Lorem ipsum"},
    {id: 3, imageSrc: "./assets/imgs/hotel3.jpg", isActive: false, header: "18:32", content: "Lorem ipsum"},
  ];

  onButtonClick(slide: number) {
    this.changeSlide(slide);
    this.setupLoop();
  }

  changeSlide(slide: number) : void{
    this.images.find((v) => v.isActive)!.isActive = false;
    this.images[slide].isActive = true;
  }

  setupLoop() : void {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      const nextIndex = this.images.findIndex((v) => v.isActive)! + 1;
      this.changeSlide(nextIndex > this.images.length - 1 ? 0 : nextIndex);
    }, 5000);
  }

  ngOnInit(): void {
    this.setupLoop();
  }

}
