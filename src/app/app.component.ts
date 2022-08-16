import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hotelProjektGrecja';
  showLoader = false;
  constructor() {}

  ngOnInit(): void {

  }
  onActive() : void {
    this.showLoader=true;
    setTimeout(() => {
      this.showLoader=false;
    }, 2000);
  }
}

