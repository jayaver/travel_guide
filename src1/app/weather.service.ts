import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCity(term: string) {
<<<<<<< HEAD
    return this.http.get(`http://api.apixu.com/v1/current.json?key=ea2a4a9d83ba4aa39a6182935190106&q=${term}`);
=======
    return this.http.get(`http://api.apixu.com/v1/current.json?key=60c58a93ad3e4a318a1133023191503&q=${term}`);
}

>>>>>>> cd287cb87f3aca947df36ac11987a8a66868142f
}

}