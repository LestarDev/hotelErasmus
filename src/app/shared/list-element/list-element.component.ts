import { Component, Input, OnInit } from '@angular/core';
import { listElementInterface } from 'src/app/core/interfaces/listElementInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent implements OnInit {

  constructor( public router : Router ) { }

  currentRouterPath : string = '';

  ngOnInit(): void {
    this.router.events.subscribe(( path : any ) => {
      this.currentRouterPath = this.listName + path;
    });
  }
  @Input() listName : listElementInterface = {
    content:"name",
    direction:""
  };
  scroll( name : any) : void {

  }


}
