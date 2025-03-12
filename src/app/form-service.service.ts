import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 


  constructor(private http: HttpClient) {}

  // Method to submit form data
  submitForm(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
