import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Note } from '../model/note';
import { Status } from 'src/app/shared/model/note';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //api url
  url = "http://localhost/webnote/backend/api";
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error); // log to console instead
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }

    /** GET notes from the server*/
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url + '/read.php')
      .pipe(
        tap(_ => console.log('fetched notes')),
        catchError(this.handleError<Note[]>('getNotes', []))
        );
  }


  /** GET Note by id. Will 404 if id not found */
  getNote(id: number): Observable<Note[]> {
    const url = `${this.url}/readOne.php?id=${id}`;
    return this.http.get<Note[]>(url)
      .pipe(
        tap(_ => console.log('fetched notes')),
        catchError(this.handleError<Note[]>('getNotes', []))
        );
  }

  /** POST NOTE */
  createNote(note: Note): Observable<Note>{
    return this.http.post<Note>(`${this.url}/create.php`, note, this.httpOptions)
    .pipe(
      tap((newNote: Note) => console.log('added note')),
      catchError(this.handleError<Note>('createNote'))
    );
  }


  /**UPDATE NOTE */
  updateNote(note: Note){
    return this.http.put<Note>(`${this.url}/update.php`, note, this.httpOptions)
    .pipe(
      tap(_ => console.log(`updated note id=${note.id}`)),
      catchError(this.handleError<any>('updateNote'))
    );
  }


  /**DELETE NOTE */
  deleteNote(id: number){
    return this.http.delete<Note>(`${this.url}/delete.php/?id=${id}`)
    .pipe(
      tap(_ => console.log(`deleted Note id=${id}`)),
      catchError(this.handleError<Note>('deleteNote'))
    );
  }


}
