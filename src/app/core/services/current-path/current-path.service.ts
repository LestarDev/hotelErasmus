import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CurrentPathService{

  constructor( 
    private router : Router,
  ) { }
  private currentPath : string = '';
  setCurrentUrlPath() : void {
    this.router.events.subscribe((path : any)=>{
      console.log(path.url)
      this.currentPath = path.url;
    })
  }
  getCurrentUrlPath() : string {
    return this.currentPath;
  }
}
