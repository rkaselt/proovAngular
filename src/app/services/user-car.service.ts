import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {Car} from "../models/car.model";

@Injectable({
  providedIn: 'root'
})
export class UserCarService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getUsers(find: string = '', sort: string = ''): Observable<any> {
    let params = new HttpParams();
    if (find) {
      params = params.set('find', find);
    }
    if (sort) {
      params = params.set('sort', sort);
    }
    return this.http.get(`${this.apiUrl}/users`, {params});
  }

  getCars(find: string = '', sort: string = ''): Observable<any> {
    let params = new HttpParams();
    if (find) {
      params = params.set('find', find);
    }
    if (sort) {
      params = params.set('sort', sort);
    }
    return this.http.get(`${this.apiUrl}/cars`, {params});
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/cars/${id}`);
  }
}
