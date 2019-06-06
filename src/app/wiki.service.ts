import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikiService {


  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  

   getWiki(term: string) {
   return this.http.get(`https://www.googleapis.com/customsearch/v1?parameters&cx=000274909655342295077:2s1axfsrhrq&q=${term}&key=AIzaSyCjWX0rDHHdGfXT98rwpJeAq5T7jFKdc6A`);
}
}