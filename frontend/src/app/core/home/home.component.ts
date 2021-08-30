import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/shared/services/api.service';
import { Note } from 'src/app/shared/model/note';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private apiService: ApiService) { }

  notes$?: Observable<Note[]>
  lenght: number = 0;

  ngOnInit(): void {
    this.notes$ = this.apiService.getNotes();
    this.notes$.subscribe(notes => this.lenght = notes.length)
  }

}
