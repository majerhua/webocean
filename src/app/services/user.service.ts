import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Response } from '../models/response.model';
import { Report } from '../models/report.model';


const baseUrl = 'https://wsocean.herokuapp.com/api';


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

  login(user:User):Observable<Response> {
    return this.http.post<Response>(`${baseUrl}/user/login`,user);
  }

  getReportHistograma(report:Report): Observable<Report[]> {
    return this.http.post<Report[]>(`${baseUrl}/histogram`,report);
  }

  getReportLineTime(): Observable<Report[]> {
    return this.http.post<Report[]>(`${baseUrl}/line-time`,{});
  }

  getIdentifiedSpecies(): Observable<Report[]> {
    return this.http.post<Report[]>(`${baseUrl}/especies-identificadas`,{});
  }

  test(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImRjMzdkNTkzNjVjNjIyOGI4Y2NkYWNhNTM2MGFjMjRkMDQxNWMxZWEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiR2VycnkgU2FsYXphciIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQVRYQUp6Q2VaMTBkQmZEYnpCT1J5WWNoSThQT1NzeTdSZmplTTM3Z2wxRD1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9taWZhcm1hLXVhdDIiLCJhdWQiOiJtaWZhcm1hLXVhdDIiLCJhdXRoX3RpbWUiOjE2NjU1ODk0MDMsInVzZXJfaWQiOiJwMW11QlR3MkhpYzAzTW8ycXBlQWlwQllYQ1UyIiwic3ViIjoicDFtdUJUdzJIaWMwM01vMnFwZUFpcEJZWENVMiIsImlhdCI6MTY2NzUxMDg2NCwiZXhwIjoxNjY3NTE0NDY0LCJlbWFpbCI6ImdlcnJ5LnNhbGF6YXJAaW5rYWZhcm1hZGlnaXRhbC5wZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTE4Mzc2MDA5OTY2Njk4NTUyMDk4Il0sImVtYWlsIjpbImdlcnJ5LnNhbGF6YXJAaW5rYWZhcm1hZGlnaXRhbC5wZSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.RmopZRvcW2conPeSZ0z6jVgGDAN0D4x_APUsjVl9HngTCuXkMXMUdRLsNfyLefDrzFs5bk6QNcJieZxb2A_At0aqF-ajsFLB9qmqXdv01VpkaoqNL4vspb0nqx8wYbCQt4366OOMz_eoBwTb12F2O9RamrJUAxjFljwuDcpPCw5UBB3G2WGeiSuMyOUhSqsAgbYEBEowsphqKf4kQakoAz3NRrNJf_gJ5eP4ueu1ZPw-bgKIwXiL7YXljvFiDoCP1EQgHQfrtpdB1n0Il66H7FMaK05WKt44Sq-7rACRU_bDJguXGmcMXwVE4X-RTnLtkkutPWoF2BvmRI_Vh7zasg'
      })
    };

    return this.http.get<any>(`https://rqwks0lv25.execute-api.us-east-1.amazonaws.com/MFCI12/clientMissions/73383637`, httpOptions);
  }
}
