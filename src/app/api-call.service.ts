import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http : HttpClient) { }

  getAllMatches(){
    return this.http.get(`${environment.apiUrl}/match/`);
  }
  getLiveMatches(){
    return this.http.get(`${environment.apiUrl}/match/live`);
  }

  getPointsTable(){
    return this.http.get(`${environment.apiUrl}/match/points-table`);
  }
}
