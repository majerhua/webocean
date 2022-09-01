import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const baseUrl = 'https://wsappocean.herokuapp.com/api';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/user/get`);
  }
  register(user:User):Observable<User> {
    return this.http.post<User>(`${baseUrl}/user/register`,user);
  }
}
