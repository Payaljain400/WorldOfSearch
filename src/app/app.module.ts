import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NewsComponent } from './components/news/news.component';
import { WeatherComponent } from './components/weather/weather.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MoviesearchComponent } from './components/movies/moviesearch/moviesearch.component';
import { MovielistComponent } from './components/movies/movielist/movielist.component';
import { MovieComponent } from './components/movies/movielist/movie/movie.component';


const routes :Routes = [
  {path: '', redirectTo:'/movies',pathMatch:'full'},
  {path: 'movies', component:MoviesComponent},
  {path: 'news', component:NewsComponent},
  {path: 'weather', component:WeatherComponent},
  {path: 'restaurant', component:RestaurantComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NewsComponent,
    WeatherComponent,
    RestaurantComponent,
    HeaderComponent,
    FooterComponent,
    MoviesearchComponent,
    MovielistComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
