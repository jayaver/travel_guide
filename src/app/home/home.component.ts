import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { NewsService } from '../news.service';
// import { WikiService } from '../wiki.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
// localStorage = [];
export class HomeComponent implements OnInit {
  terms = [];
  constructor(private route: ActivatedRoute, private weather: WeatherService, private news:NewsService) { }

  ngOnInit() {
    this.route.params.subscribe(term => {
      console.log(term);
      this.weather.getCity(term.city).subscribe((term: any) => {
        //localStorage.setItem('city', 'term.location.name');
        console.log(term);
        this.terms = term.terms;
        console.log(this.terms);
        })

      this.news.getCity(term.city).subscribe((term: any) => {
        // localStorage.setItem('citydata', term.location);
        console.log(term);
        // this.terms = term.terms;
      })
    })

    
  }

}
