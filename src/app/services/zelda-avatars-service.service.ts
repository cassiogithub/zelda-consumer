import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Character } from '../models';
import { CharactersResponse } from '../models/characters-response';

@Injectable({
    providedIn: 'root',
})
export class ZeldaAvatarsServiceService {
    private endpoint: string = 'https://zelda.fanapis.com/api';

    constructor(
      private http : HttpClient
    ) {}


    public listCharacters(limit: string = '10'): Observable<CharactersResponse> {
      const url = `${this.endpoint}/characters?limit=${limit}`;

      return this.http
        .get<CharactersResponse>(url)
        .pipe(catchError(this.handleError<CharactersResponse>('Falhei mizeravelmente com uma requisição simples')));
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.log(`failed: ${error.message}`);
        return of(result as T);
      };
    }
}
