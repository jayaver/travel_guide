import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getCity(term: string) {
<<<<<<< HEAD
    return this.http.get(`https://newsapi.org/v2/everything?q=${term}&apiKey=f15e441dbbf6458196b518b5433ed625&result=5`)
  }

  // getArticles(news:string) {
  //   return this.http.get(`https://newsapi.org/v2/everything?q=${city}&apiKey=f15e441dbbf6458196b518b5433ed625`)
  // }
=======
    return this.http.get(`https://newsapi.org/v2/everything?q=${term}&apiKey=f15e441dbbf6458196b518b5433ed625`);
}
>>>>>>> cd287cb87f3aca947df36ac11987a8a66868142f
}

