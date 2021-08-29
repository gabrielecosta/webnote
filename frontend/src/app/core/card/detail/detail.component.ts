import { Component, Input, OnInit } from '@angular/core';
import { Note, Status } from 'src/app/shared/model/note';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  show: Boolean = false;

  @Input() note!: Note;

  constructor() { }

  ngOnInit(): void {
  }

  background(note: Note): string {
    if(note.status == Status.ToDo ) {
      return 'green';
    } else if (note.status == Status.InProgress) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  expand(): void {
    if (this.show === true) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

}
