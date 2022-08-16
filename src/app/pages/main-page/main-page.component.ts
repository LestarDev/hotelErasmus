import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  
  constructor( private router : Router) { }

  ngOnInit(): void {
  }

  printClicked(data: boolean): void {
    console.log(data);
  }
  buttonIsClicked( isButtonClicked : boolean) : void {
    if(isButtonClicked){
      this.router.navigate(['/booking'])
    }
  }

}
