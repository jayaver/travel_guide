import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCity(term: string) {
    return this.http.get(`http://api.apixu.com/v1/current.json?key=ea2a4a9d83ba4aa39a6182935190106&q=${term}`);
}

}