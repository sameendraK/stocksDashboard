import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlPath: string = "https://intradayscreener.com/api/openhighlow/cash";
  constructor(
    private http: HttpClient,
    private dataStoreService:DataStoreService
  ) { }

  get(): Observable<any> {
    return this.http.get(this.urlPath);
  }
}
