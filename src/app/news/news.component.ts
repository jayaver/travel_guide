import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 
  constructor(private route:ActivatedRoute, private news:NewsService) { }

  ngOnInit() {
  
    this.route.params.subscribe(term => {
      console.log(term);
      this.news.getCity(term.city).subscribe((term: any) => {
       // localStorage.setItem('citydata', term.location);
        console.log(term);
      })
    })
  }
 }
