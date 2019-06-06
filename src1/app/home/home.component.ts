import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { NewsService } from '../news.service';
<<<<<<< HEAD
import { WikiService } from '../wiki.service'
import { Condition } from 'selenium-webdriver';
=======
import { WikiService } from '../wiki.service';

>>>>>>> cd287cb87f3aca947df36ac11987a8a66868142f


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
// localStorage = [];
export class HomeComponent implements OnInit {
<<<<<<< HEAD

  terms = [];
  sources: any;
  places:any;
  products =[];

  constructor(private route: ActivatedRoute, private weather: WeatherService, 
             private news:NewsService, private wiki: WikiService) { }

  ngOnInit() {

    // this.wiki.getData('/', {version: 'draft', starts_with: 'place/'})
    // .then(data => {
    //   // this.products = data.stories;
    //   console.log(data)
    // });
    
      this.route.params.subscribe(term => {
       // console.log(term);
        this.weather.getCity(term.city).subscribe((term : any) => {
          
          //console.log(term);
          this.terms = term;
          console.log(this.terms);
          //console.log(this.terms.ma)
          })
  
=======
  
  terms = [];
  sources: any;
  products = []
  
  constructor(private route: ActivatedRoute, private weather: WeatherService, private news: NewsService, private wiki: WikiService) { }

  ngOnInit() {
    this.route.params.subscribe(term => {
     // console.log(term);
      this.weather.getCity(term.city).subscribe((term : any) => {
        
        //console.log(term);
        this.terms = term;
        console.log(this.terms);
        })

>>>>>>> cd287cb87f3aca947df36ac11987a8a66868142f
        this.news.getCity(term.city).subscribe((source: any) => {
          // localStorage.setItem('citydata', term.location);
          //console.log(term);
          console.log(source.articles);

          this.sources = source.articles;
          console.log(this.sources);

<<<<<<< HEAD
       })
       
       this.wiki.getWiki(term.city).subscribe((place: any) => {
        // localStorage.setItem('citydata', term.location);
         console.log(place);
         this.places=place.items[0];
        console.log(this.places)
         
       })
       
    })
=======
        })
        this.wiki.getWiki(term.city).subscribe((place: any) => {
          // localStorage.setItem('citydata', term.location);
           console.log(place);
           this.places=place.items[0];
          console.log(this.places)
           
         })
    })

    
>>>>>>> cd287cb87f3aca947df36ac11987a8a66868142f
  }

}