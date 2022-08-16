import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() content: string = "";
  @Input() size: number = 0;
  @Input() direction: string = "right";

  isRight: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
