import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../../shared/services/api.service';
import { Note } from 'src/app/shared/model/note';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  notes$!: Observable<Note[]>

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.notes$ = this.api.getNotes();
    this.api.getNotes().subscribe(arr => console.log(arr));
  }

}
