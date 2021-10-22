import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "https://localhost:44365/api/Employee";
  constructor(private http:HttpClient) { }

  getEmployees(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl);
  }

  getEmployee(val:any) {
    return this.http.get<any>(this.APIUrl+`/${val}`);
  }

  addEmployee(val:any) {
    return this.http.post<any>(this.APIUrl, val);
  }
  
  deleteEmployee(val:any) {
    return this.http.delete<any>(this.APIUrl+`/${val}`);
  }

  updateEmployee(val:any) {
    return this.http.put<any>(this.APIUrl, val);
  }
}
