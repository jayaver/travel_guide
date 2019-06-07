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
   return this.http.get(`https://www.googleapis.com/customsearch/v1?parameters&cx=011795830681668642336:thrcgcixz_w&q=${term}&key=AIzaSyDY_O7s4JBQGc-hL0AqT4RXoe71_svxGTg`);
}
}
