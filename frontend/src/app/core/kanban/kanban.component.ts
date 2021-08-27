import { Component, OnInit } from '@angular/core';
import { Note, Status } from 'src/app/shared/model/note';

import { ApiService } from 'src/app/shared/services/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  todoNotes$?: Observable<Note[]>
  inProgressNotes$?: Observable<Note[]>
  doneNotes$?: Observable<Note[]>

  ngOnInit(): void {
    this.todoNotes$ = this.filteredNotes(Status.ToDo);
    this.inProgressNotes$ = this.filteredNotes(Status.InProgress);
    this.doneNotes$ = this.filteredNotes(Status.Done);
    //this.todoNotes$.subscribe(notes => console.log(notes));
  }

  filteredNotes(term: Status): Observable<Note[]> {
    return this.apiService.getNotes()
      .pipe(
        map((notes: Note[]) => notes.filter(note => note.status == term))
      )
  }

}
