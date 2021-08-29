import { Component, OnInit } from '@angular/core';
import { Note, Status } from 'src/app/shared/model/note';

import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newNote: Note = { id: 0, title: '', description: '', status: Status.ToDo };

  possibleStatus: String[] = ['to do', 'in progress', 'done'];

  constructor( private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  create(form: { value: Note; }): void {
      this.apiService.createNote(form.value).subscribe((note: Note)=>{
        console.log("Note created, ", note);
        this.router.navigate(['/kanban']);
      });
  }

  check (status: String): Status {
    if(status === 'to do') {
      return Status.ToDo
    } else if (status === 'in progress') {
      return Status.InProgress
    } else {
      return Status.Done
    }
  }

}
