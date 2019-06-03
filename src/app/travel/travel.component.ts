import { Component, OnInit } from '@angular/core';
import { SourceService } from '../source.service'

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  reports:[];
  city:any;

  constructor(private newsService:SourceService) { }

  ngOnInit() {
  
  // this.newsService.getNews()
  // .subscribe((city:any)=>{

  // })
  }
}