import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://api.disneyapi.dev/'
  constructor(
    private http: HttpClient,
  ) { }

  get<T>(url: string) {
    return this.http.get<T>(this.baseUrl + url);
  }
}
