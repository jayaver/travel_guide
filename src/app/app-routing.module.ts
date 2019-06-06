import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CityComponent } from './city/city.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component'




const routes: Routes = [
  //{path : '', component:HomeComponent},
  { path: 'search/:city', component: HomeComponent },
  { path: 'search/:city', component: NewsComponent },
  { path: '', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
