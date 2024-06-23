import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  EXERCISES = [
    {
      title: "Funky String",
      description: `Given a sentence, where words are delimited by a comma, a period, or a space character, 
      make first and last characters of each of the word to uppercase and other ones to lowercase.`
    },
    {
      title: "Sentence has a word (case-insensitive)",
      description: `Find if word exists independently in a sentence in a case-insensitive manner. 
      The word should not be a substring of another word.`
    }
  ];

  constructor(private http: HttpClient) { }

  compileCode(code: string, lang: string): Observable<any> {
    return this.http.post<any>('http://localhost:8000/compile-code', {
      code: code,
      lang: lang
    });
  }

  // TODO: Shift the host and port info to the environment specific file
  checkServerHealth(): Observable<any> {
    return this.http.get<string>('http://localhost:8000/health-status');
  }

  getExercises(): Observable<any> {
    return of(this.EXERCISES);
  }
}
