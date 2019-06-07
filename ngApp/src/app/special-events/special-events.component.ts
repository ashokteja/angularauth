import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HtmlParser } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  constructor(private _eventService:EventService, private _router:Router) { }
  specialEvents = [];
  ngOnInit() {
    this.getSpecialEvents();
  }

  getSpecialEvents(){
    this._eventService.getSpecialEvents()
    .subscribe(
      res=>this.specialEvents = res,
      err=>{
        if (err instanceof HttpErrorResponse){
          if(err.status ==401){
            this._router.navigate(['/login']);
          }
        }
      }
    )
  }
}
