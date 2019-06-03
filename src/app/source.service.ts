import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  constructor(private http:HttpClient) { }

  getNews(city:string){
    return this.http.get(`https://newsapi.org/v2/everything?q=${city}&apiKey=f15e441dbbf6458196b518b5433ed625`);
  }
}
