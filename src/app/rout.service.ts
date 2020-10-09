import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutService {
  constructor(private http:HttpClient) { }
  getdata()
  {
    return this.http.get('./assets/gdata.json');
  }
}
