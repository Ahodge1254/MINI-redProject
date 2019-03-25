import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from './models/game.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class DbService {
  private dbUrl = 'http://localhost:5050/gamestuff/'
  constructor(private http: HttpClient) { }

  getGames() : Observable<Game[]> {
    return this.http.get<Game[]>(this.dbUrl)
  }

  makeGames(game: Game) : Observable<Game[]> {
    const url = `${this.dbUrl}create`
    return this.http.post<Game[]>(url, game, httpOptions)
  }

  deleteGames(id: number): Observable<{}> {
    const url = `${this.dbUrl}delete/${id}`;
    return this.http.delete(url, httpOptions)
  }

  updateGames(id: number): Observable<{}> {
    const url = `${this.dbUrl}edit/${id}`
    return this.http.put(url, httpOptions)
  }
}
