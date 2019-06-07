import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { NewsService } from '../news.service';
import { WikiService } from '../wiki.service';
import { ContactService } from '../contact.service';
import { Item } from '../models/item';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  

export class HomeComponent implements OnInit {

  terms: any;
  sources: any;
  places:any;
  //food=[];
 
  //Fields for firebase
  item:Item={
    name:'',
    email:'',
    phone:''
  }

  //Calling WeatherService, NewsService, WikiService & ContactService
constructor(private route: ActivatedRoute, private weather: WeatherService, 
             private news:NewsService, private wiki: WikiService, private contact: ContactService ) { }

  ngOnInit() {

    //weatherapi data call
      this.route.params.subscribe(term => {
      this.weather.getCity(term.city).subscribe((term : any) => {
      this.terms = term;
    })

    //newsapi data call
  
      this.news.getCity(term.city).subscribe((source: any) => {
      this.sources = source.articles;
    })

  //googleapi data call
       
      this.wiki.getWiki(term.city).subscribe((place: any) => { 
      this.places=place.items[0];
      //this.food=this.places.pagemap.foodestablishment;   
      //console.log(this.food)
    })

  })


  }

  //data posting in firebase
  
  onSubmit(){
    if(this.item.name != '' && this.item.email != '' && this.item.phone !=''){
      this.contact.addItem(this.item);
      this.item.name='';
      this.item.email='';
      this.item.phone='';
      alert ("We will get in touch with you soon");
      
    }
  }
}


