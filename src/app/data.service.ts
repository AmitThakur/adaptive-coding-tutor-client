import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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
}
