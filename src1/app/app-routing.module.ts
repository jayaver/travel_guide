import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component'
import { CityComponent } from './city/city.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component'




const routes: Routes = [
  //{path : '', component:HomeComponent},
  { path: 'search/:city', component: HomeComponent },
  { path: 'search/:city', component: NewsComponent },
  { path: '', component: SearchComponent }
=======
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: 'search/:city', component: HomeComponent },
  { path: '', component: SearchComponent }
  
>>>>>>> cd287cb87f3aca947df36ac11987a8a66868142f
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
