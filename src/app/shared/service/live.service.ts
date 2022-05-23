import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePagable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiRUL = 'http://localhost:8080/lives';
  httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json'
    })
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getLivesWithFlag(flag: string): Observable<ResponsePagable> {
    return this.httpClient.get<ResponsePagable>(this.apiRUL + `?flag=${flag}`);
  }
}
