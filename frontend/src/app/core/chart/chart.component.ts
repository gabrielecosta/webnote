import * as Highcharts from 'highcharts';

import { Component, Input, OnInit } from '@angular/core';
import { Note, Status } from 'src/app/shared/model/note';
import { first, map } from 'rxjs/operators';

import { ApiService } from 'src/app/shared/services/api.service';
import { Chart } from 'angular-highcharts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public lineChart: Chart = new Chart;
  loading = true;

	constructor( private apiService: ApiService ) { }

	ngOnInit() {
    this.apiService.getNotes()
    .pipe(first())
      .subscribe(
        notes => {
          this.lineChart = new Chart({
            chart: {
              type: 'pie'
            },
            title: {
              text: 'Webnotes'
            },
            credits: {
              enabled: false
            },
            series : [{
              type: 'pie',
              name: 'Webnotes',
              colors: ['green', 'yellow', 'red'],
              data: [
                 ['To do', notes.filter(note => note.status == Status.ToDo).length],
                 ['In progress', notes.filter(note => note.status == Status.InProgress).length],
                 /*
                 {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                 },
                 */
                 ['Done', notes.filter(note => note.status == Status.Done).length],
              ]
           }]
          });
          this.loading = false;
        },
        () => {}
      )

	}

  filteredNotes(term: Status): Observable<Note[]> {
    return this.apiService.getNotes()
      .pipe(
        map((notes: Note[]) => notes.filter(note => note.status == term))
      )
  }

}
