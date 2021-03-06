import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getCity(term: string) {
    return this.http.get(`https://newsapi.org/v2/everything?q=${term}&pageSize=10&apiKey=f15e441dbbf6458196b518b5433ed625`)
  }

  // getArticles(news:string) {
  //   return this.http.get(`https://newsapi.org/v2/everything?q=${city}&apiKey=f15e441dbbf6458196b518b5433ed625`)
  // }
}
