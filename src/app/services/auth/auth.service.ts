import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ArgsLoginTypes, ArgsMeTypes } from '../../shared/types';
import { ResponseLoginTypes } from '../../shared/types/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }

  login(url: string, args: ArgsLoginTypes): Observable<any> {
    return this.http.post(`${environment?.apiUrl}/auth`, args);
  }

  me(): Observable<any> {
    return this.http.post(`${environment?.apiUrl}/me`, undefined);
  }
}