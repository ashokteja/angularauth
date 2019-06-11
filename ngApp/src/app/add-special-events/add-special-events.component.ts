import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EventService} from '../event.service';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-add-special-events',
  templateUrl: './add-special-events.component.html',
  styleUrls: ['./add-special-events.component.css']
})
export class AddSpecialEventsComponent implements OnInit {

   specialEventsData ={
    name:'',
    description:'',
    date : new Date(),
    userId:''
  };

  public Editor = ClassicEditor;
  constructor(private _eventService : EventService, private toastr: ToastrService,
              private _authService : AuthService
    ) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(){
    this.specialEventsData ={
      name:'',
      description:'',
      date : new Date(),
      userId: ''
    };
  }
  
  saveSpecialEvents(){

    if(this.specialEventsData.name && this.specialEventsData.description){
      debugger
      this.specialEventsData.userId = this._authService.getUserId();
      this._eventService.addSpecialEvents(this.specialEventsData)
      .subscribe(
        res=> {
          if(res.statusCode === 200){
            this.toastr.success('Event Saved Successfully', 'New Special Event');
          }
            this.resetForm();
        },
        err=>{
          if(err.statusCode === 400){
            this.toastr.success('Event Save Failed','New Special Event');
          }
        }
      )

    }

  }

}
