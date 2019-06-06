import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  city: '';
constructor(private route: Router) { }

  ngOnInit() { }
  search(city: string) {
    this.route.navigate(['/search', city]);
  }
}





