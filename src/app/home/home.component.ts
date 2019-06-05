import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { NewsService } from '../news.service';
import { WikiService } from '../wiki.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
// localStorage = [];
export class HomeComponent implements OnInit {
  
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

        this.news.getCity(term.city).subscribe((source: any) => {
          // localStorage.setItem('citydata', term.location);
          //console.log(term);
          console.log(source.articles);

          this.sources = source.articles;
          console.log(this.sources);

        })
        this.wiki.getWiki(term.city).subscribe((place: any) => {
          // localStorage.setItem('citydata', term.location);
           console.log(place);
           this.places=place.items[0];
          console.log(this.places)
           
         })
    })

    
  }

}
