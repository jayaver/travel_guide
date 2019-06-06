import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import Client from 'storyblok-js-client';
import { ActivatedRoute } from '@angular/router';

//const StoryblokClient = require('storyblok-js-client')


@Injectable({
  providedIn: 'root'
})
export class WikiService {


  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  

   getWiki(term: string) {
   return this.http.get(`https://www.googleapis.com/customsearch/v1?parameters&cx=004668859573437808537:w29iqq3m8dg&q=${term}&key=AIzaSyBswrK4KlnF4mKXQG9VTPGBo5jCTgZU-j4`);
}
}
