import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-add-special-events',
  templateUrl: './add-special-events.component.html',
  styleUrls: ['./add-special-events.component.css']
})
export class AddSpecialEventsComponent implements OnInit {

  specialEventsData ={};
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit() {
  }

}
