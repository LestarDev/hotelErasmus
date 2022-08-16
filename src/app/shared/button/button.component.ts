import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() size: number = 0;
  @Input() color: string = "#000000";
  @Input() hasLightText: boolean = true;
  @Input() content: string = "button";

  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  clickedEvent(): void {
    this.clicked.emit(true);
  }

  constructor() { }

  ngOnInit(): void {
    
  }
}
