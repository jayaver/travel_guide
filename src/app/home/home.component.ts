import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
// localStorage = [];
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private weather: WeatherService) { }

  ngOnInit() {
    this.route.params.subscribe(term => {
      console.log(term);
      this.weather.getCity(term.city).subscribe((term: any) => {
        localStorage.setItem('citydata', term.location);
        console.log(term);
      })
    })
  }

}
