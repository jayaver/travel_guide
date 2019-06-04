import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCity(term: string) {
    return this.http.get(`http://api.apixu.com/v1/current.json?key=60c58a93ad3e4a318a1133023191503&q=${term}`);
}

}
