import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Note, Status } from 'src/app/shared/model/note';

import { ApiService } from './../../shared/services/api.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() note!: Note;
  id?: number
  possibleStatus: String[] = ['to do', 'in progress', 'done'];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getNote();
  }

  getNote(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.id = id;
    this.apiService.getNote(id)
      .subscribe((note) => {
        this.note = note[0];
        console.log(this.note)
      });
  }

  update(form: { value: Note; }): void {
    form.value.id = this.note.id;
    //console.log(form.value)
    this.apiService.updateNote(form.value).subscribe((note: Note)=>{
      console.log("Note updated, ", note);
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
