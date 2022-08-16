import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.scss']
})
export class LoadingAnimationComponent implements OnInit {
  ballsCount: number;
  balls: Array<number>;

  constructor() {
    if (window.innerWidth < 760) {
      this.ballsCount = 4;
    } else {
      this.ballsCount = 8;
    }

    this.balls = new Array(this.ballsCount).fill(0);
  }

  

  ngOnInit(): void {
  }

}
